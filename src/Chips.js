import React from "react";
import {Link} from "react-router-dom";
import chips from "./img/chips.jpg";

function Chips() {

    return (
        <div>
            <img src={chips} alt="Chips" />
            <h1>Salts!! I need water!!</h1>
            <Link to='/'> Go Back</Link>
        </div>
    );
}

export default Chips;