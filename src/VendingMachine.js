import React from "react";
import { Link } from "react-router-dom";
import vendingMachine from "./img/vendingMachine.jpg";

function VendingMachine() {

    return (
        <div className="VendingMachine" style = {{backgroundImage: `url(${vendingMachine})`}}>
            <h1>Hello, what would you like to eat?</h1>

            <h1><Link to="/chips">Chips</Link> </h1>
            <h1><Link to="/cocacola">Cola</Link> </h1>
            <h1><Link to="/noodles">Noodles</Link> </h1>
        </div>
        
    );

}

export default VendingMachine;