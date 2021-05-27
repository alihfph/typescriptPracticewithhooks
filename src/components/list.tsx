import { ListGroup } from "react-bootstrap";
import { ISearch } from "../types/types";
import Track from "./track";
interface TrackListProps {
  tracks: ISearch[];
}

const TackList = ({ tracks }: TrackListProps) => {
  console.log(tracks);
  return (
    <ListGroup>
      {tracks.map((track: ISearch) => (
        <Track key={track.id} track={track} />
      ))}
    </ListGroup>
  );
};

export default TackList;
