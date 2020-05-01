import React from 'react';
import './nav.css';


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-light">
            <a className="navbar-brand" href="#">
                <img src={process.env.PUBLIC_URL + '/twitchlogo.png'} width="30" height="30" alt="" />
                Twitch
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Browse</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" id="search" type="submit">Search</button>
                </form>
                <button className="btn my-2 ml-5 font-weight-bold my-sm-0" id="register" type="submit">Sign Up</button>
                <button className="btn my-2 ml-2 font-weight-bold my-sm-0" id="login" type="submit">Login</button>
            </div>
        </nav>
    );
}

export default Navbar