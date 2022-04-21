import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
const Navbar = () => {
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }
    let location = useLocation();
    return (
        <nav className="navbar  navbar-fixed-top navbar-default navbar-expand-lg navbar-dark bg-dark py-0">
            <div className="container-fluid">
                <div className="text-center">
                    <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/plasticine/100/000000/reading.png" alt="Galacticnot-logo" width="50" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>About</Link>
                        </li>
                        
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <li><Link className="btn btn-primary mx-1 sm" to="/login" role="button" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>Login</Link></li>
                            <li><Link className="btn btn-primary mx-1 sm" to="/signup" role="button" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>Signup</Link></li>
                        </form> : <form className="d-flex flex-important">
                            
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`} aria-current="page" to="/profile" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>Profile</Link>
                            </li>
                            <li>
                            <button size="small" onClick={handleLogout} className="btn btn-primary" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>Logout</button></li></form>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar