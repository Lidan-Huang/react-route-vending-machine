import cocaCola from "./img/cocaCola.jpg";
import {Link} from "react-router-dom";

function CocaCola() {

    return (
        <div>
            <img src={cocaCola} alt="Cola" />
            <h1>Ahh.. That's the stuff..</h1>
            <Link to='/' > Go Back</Link>
        </div>
    );
}

export default CocaCola;