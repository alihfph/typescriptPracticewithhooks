import {useState}  from 'react'
import { Container, Jumbotron, Spinner } from 'react-bootstrap';
import Search from '../components/search';
import TrackList from '../components/list';
import { ISearch } from '../types/types';

const Homepage = () => {
 
  const [tracks, setTracks] = useState<ISearch[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData: Function = async (search: string)=> {
     try {
       setLoading(true)
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      );
      const {data} = await response.json();
      setTracks(data)
      console.log(setTracks)
      setLoading(false)
    
    }
      catch (error) {
       console.log(error)
       setLoading(false);
       
     }
    }

  
  return ( 
    <>
    <Jumbotron fluid>
    <Container>
      <h1>Fluid jumbotron</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal
        space of its parent.
      </p>
    <Search  fetchData ={fetchData}/>
    </Container>
      </Jumbotron>
   <Container>
   {(loading && <Spinner animation='grow' />) || (
    <TrackList tracks={tracks} />
  )}
   </Container>
   </>
  )
}

export default Homepage