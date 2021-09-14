import React from 'react';
import {Link, NavLink} from 'react-router-dom';

//link y navlink hace lo mismo...
//cuando uso navlink debo usar activeclassname
//cuando uso lin debo usar classname

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" to="/" className="nav-link active">Home</NavLink>
                        <NavLink exact activeClassName="active" to="/about" className="nav-link" >About</NavLink> 
                        <NavLink exact activeClassName="active" to="/login" className="nav-link" >Login</NavLink>
                    
                    </div>
                </div>
            </div>
        </nav>
    )
}
