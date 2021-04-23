import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/home">Flashcards</Link></li>
                        {/* <li><Link className="nav-link" to="/study">Study</Link></li>
                        <li><Link className="nav-link" to="/manage">Manage</Link></li> */}
                    </ul>
                </nav>
            </header>
        );
    }
}
export default HeaderComponent;