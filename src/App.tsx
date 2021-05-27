import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
import Details from "./pages/detailspage";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route path="/details/:id" component={Details} />
    </BrowserRouter>
  );
}

export default App;
