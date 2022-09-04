import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" style={{width:"35px"}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active text-white text-uppercase" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase" to="/news">News</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>

    );
}

export default Navbar;