const Footer = () => {
    return ( 
       <div className="container-fluid bottom-0 position-fixed">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
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
                <p className="text-center text-muted">c 2022 Kobes Bite, Inc.</p>
            </footer>
       </div>
     );
}
 
export default Footer;