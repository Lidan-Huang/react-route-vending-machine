import noodles from "./img/noodles.jpg";
import {Link} from "react-router-dom";

function Noodles() {

    return (
        <div>
            <img src={noodles} alt="Noodles" />
            <h1>Fire!!!! Hot! Hot! Hot!</h1>
            <Link to='/' > Go Back</Link>
        </div>
    );
}

export default Noodles;