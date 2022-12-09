import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to = "/" >
                        <a className="navbar-brand" href="#">Sirocco</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to = "/products">
                            <a className="nav-link active" aria-current="page" href="#">Pedidos on line</a>
                            </Link>
                            <a className="nav-link active" href="#">Catering</a>
                            <a className="nav-link active" href="#">Nosotros</a>
                        </div>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
                  
            </nav> 
        </div>
           
    );

}


export default Navbar