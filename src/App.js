import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Noodles from "./Noodles";
import CocaCola from "./CocaCola";
import Chips from "./Chips";
import './App.css';
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
