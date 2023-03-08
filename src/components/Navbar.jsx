const Navbar = () => {
    return ( 
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                        <h3 className="fw-bold text-danger">Kobes Bite</h3>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
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