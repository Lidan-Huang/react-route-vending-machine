import { useParams, BrowserRouter, Route, Switch } from "react-route-dom";
import Noodles from "./Noodles";
import CocaCola from "./CocaCola";
import Chips from "./Chips";
import Home from "./Home";


function VendingMachine() {

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
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );

}

export default VendingMachine;