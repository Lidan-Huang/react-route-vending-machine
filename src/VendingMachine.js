import { Link } from "react-route-dom";
import React from "react";
import vendingMachine from "./img/vendingMachine.jpg";

function VendingMachine() {

    return (
        <div className="VendingMachine" style = {{backgroundImage: `url(${vendingMachine})`}}>
            <h1>Hello, what would you like to eat?</h1>

            <h1><Link to="/chips">Chips</Link> </h1>
            <h1><Link to="/cocaCola">Cola</Link> </h1>
            <h1><Link to="/noodles">Noodles</Link> </h1>
        </div>
        
    );

}

export default VendingMachine;