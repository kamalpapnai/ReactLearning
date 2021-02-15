import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mr-4">
                                    <li className="nav-item active">
                                        <NavLink activeClassName="active-link" className="nav-link" to="/services" >Services <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active-link" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active-link" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar