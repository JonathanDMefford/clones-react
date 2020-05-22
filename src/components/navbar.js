import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
    NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Account from './account';
import './nav.css';


function Navbarmenu(props) {

    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggle = () => setModal(!modal);
    const dropToggle = () => setDropdownOpen(!dropdownOpen);
    const history = useHistory();
    const API_ENDPOINT = "https://twitch-clone-277819.uc.r.appspot.com";

    function openModal(props) {
        setActiveTab(props)
        toggle()
    }

    const navtoggle = () => setIsOpen(!isOpen);

    const userLogout = () => {

        const data = {
            headers: { Authorization: "Bearer " + props.token }
        }
        console.log(data);
        axios.get(API_ENDPOINT + '/api/logout', data)
            .then(function (response) {
                console.log(response, 'logout');
                setIsLoggedIn(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            });
        history.push("/");
    }

    return (
        <Navbar color="light" light expand="md" className="border-bottom mb-5">
            <NavbarBrand className="navbar-brand" href="#">
                <img src={process.env.PUBLIC_URL + '/images/twitchlogo.png'} width="30" height="30" alt="" />
                Twitch
            </NavbarBrand>
            <NavbarToggler onClick={navtoggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink><Link to="/" className="nav-link">Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/browse" className="nav-link">Browse</Link></NavLink>
                    </NavItem>
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
                        user={props.user}
                        setUser={props.setUser}
                        token={props.token}
                        setToken={props.setToken}
                    />
                    {isLoggedIn ?
                        <Dropdown className="ml-5 mr-2 mt-2" direction="down" isOpen={dropdownOpen} toggle={dropToggle}>
                            <DropdownToggle id="register">
                                <FontAwesomeIcon icon={faUser} />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem id="profile">{props.user.name}</DropdownItem>
                                <DropdownItem><Link to="/profile" id="profile">Settings</Link></DropdownItem>
                                {props.user.name === "admin" ?
                                    <DropdownItem><Link to="/admin" id="profile">Admin Page</Link></DropdownItem>
                                    : null}
                                <DropdownItem id="profile" onClick={userLogout}>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        :
                        <React.Fragment>
                            <button className="btn my-2 ml-5 font-weight-bold btn-small my-sm-0" onClick={() => openModal('login')} id="login" type="submit">Login</button>
                            <button className="btn my-2 mx-2 font-weight-bold btn-small my-sm-0" onClick={() => openModal('register')} id="register" type="submit">Sign Up</button>
                        </React.Fragment>
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navbarmenu