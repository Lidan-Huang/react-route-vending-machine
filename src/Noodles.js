import noodles from "./img/noodles.jpg";
import {Link} from "react-router-dom";

function Noodles() {

    return (
        <div>
            <img src={noodles} alt="Noodles" />
            <Link  to='/' />
        </div>
    );
}

export default Noodles;