import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Sirocco</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Cantidades</a>
                            <a className="nav-link active" href="#">Nuestros Gustos</a>
                            <a className="nav-link active" href="#">Nosotros</a>
                        </div>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>  
            </nav> 
        </div>
           
    );

}


export default Navbar