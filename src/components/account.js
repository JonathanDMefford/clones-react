import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Nav, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';


function Account(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();
    const API_ENDPOINT = "https://twitch-clone-277819.uc.r.appspot.com";

    const userLogin = () => {

        const data = {
            email: email,
            password: password
        }

        axios.post(API_ENDPOINT + '/api/login', data)
            .then(function (response) {
                console.log(response.data, 'login');
                props.setUser(response.data.user);
                props.setToken(response.data.token);
                props.setIsLoggedIn(response.data.token ? true : false);
                props.toggle();

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            history.push("/");
    }

    const userRegister = () => {

        const data = {
            name: name,
            email: email,
            password: password,
            // confirmPassword: confirmPassword
        }

        axios.post(API_ENDPOINT + '/api/register', data)
            .then(function (response) {
                console.log(response, 'register');
                props.toggle();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>Log in to Twitch</ModalHeader>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={props.activeTab === 'login' ? 'active' : ''}
                        onClick={() => props.setActiveTab('login')}>
                        Log In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={props.activeTab === 'register' ? 'active' : ''}
                        onClick={() => props.setActiveTab('register')}>
                        Sign Up
                    </NavLink>
                </NavItem>
            </Nav>
            <ModalBody>
                <Form>
                    {props.activeTab === 'register' ?
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input onChange={(e) => setName(e.target.value)} type="name" value={name} name="name" id="exampleName" placeholder="Enter name" />
                        </FormGroup> : null}
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input onChange={(e) => setEmail(e.target.value)} type="email" value={email} name="email" id="exampleEmail" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input onChange={(e) => setPassword(e.target.value)} type="password" value={password} name="password" id="examplePassword" placeholder="Enter password" />
                    </FormGroup>
                    {props.activeTab === 'register' ?
                        <FormGroup>
                            <Label for="exampleConfirmPassword">Confirm Password</Label>
                            <Input onChange={(e) => setConfirmPassword(e.target.value)} type="confirmPassword" value={confirmPassword} name="confirmPassword" id="exampleConfirmPassword" placeholder="Re-enter Password" />
                        </FormGroup> : null}
                </Form>
            </ModalBody>
            <ModalFooter>
                {props.activeTab === 'register' ?
                    <Button id="register" className="font-weight-bold" onClick={userRegister} block>Sign Up</Button>
                    :
                    <Button id="register" className="font-weight-bold" onClick={userLogin} block>Log In</Button>}
            </ModalFooter>
        </Modal>
    );
}

export default Account