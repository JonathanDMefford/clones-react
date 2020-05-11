import React, { useState } from 'react';
import axios from 'axios';
import Account from './account';
import './nav.css';


function Navbar(props) {

    const [token, setToken] = useState('');
    const [modal, setModal] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggle = () => setModal(!modal);

    function openModal(props) {
        setActiveTab(props)
        toggle()
    }

    const userLogout = () => {

        const data = {
            headers: {Authorization: "Bearer " + token}
        }
        console.log(data);
        axios.get('http://127.0.0.1:8000/api/logout', data)
            .then(function (response) {
                console.log(response, 'logout');
                return response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
            setIsLoggedIn(false);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom mb-5 bg-light">
            <a className="navbar-brand" href="#">
                <img src={process.env.PUBLIC_URL + '/images/twitchlogo.png'} width="30" height="30" alt="" />
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
                <Account
                    modal={modal}
                    toggle={toggle}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setIsLoggedIn={setIsLoggedIn}
                    setToken={setToken}
                />
                {isLoggedIn
                    ? <button className="btn my-2 ml-5 font-weight-bold my-sm-0" onClick={userLogout} id="logout" type="submit">Logout</button> :
                    <React.Fragment>
                        <button className="btn my-2 ml-5 font-weight-bold my-sm-0" onClick={() => openModal('login')} id="login" type="submit">Login</button>
                        <button className="btn my-2 mx-2 font-weight-bold my-sm-0" onClick={() => openModal('register')} id="register" type="submit">Sign Up</button>
                    </React.Fragment>
                }
            </div>
        </nav>
    );
}

export default Navbar