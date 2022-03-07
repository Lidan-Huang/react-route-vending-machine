import { useParams, BrowserRouter, Route, Switch } from "react-route-dom";
import Noodles from "./Noodles";
import CocaCola from "./CocaCola";
import Chips from "./Chips";
import './App.css';
import VendingMachine from "./VendingMachine";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/noodles">
          <Noodles />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/cocacola">
          <CocaCola />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
