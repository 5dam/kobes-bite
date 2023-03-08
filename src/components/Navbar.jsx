const Navbar = () => {
    return ( 
        <div>
            <nav className="container-fluid navbar navbar-expand-lg position-relative">
                <div class="container">
                        <h3 className="fw-bold text-danger px-5 pt-2">Kobes Bite.</h3>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <button className="btn btn-danger">Order Now!</button>
                    </div>
                    
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;