import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Nav, NavItem, NavLink, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Account(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userLogin = () => {

        const data = {
            email: '',
            password: ''
        }

        axios.post('http://127.0.0.1:8000/api/login', data)
            .then(function (response) {
                console.log(response);
                return response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
            props.toggle()
    }

    const userRegister = () => {

        const data ={
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        axios.post('http://127.0.0.1:8000/api/register', data)
            .then(function (response) {
                console.log(response);
                return response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
            props.toggle()
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>Log in to Twitch</ModalHeader>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={props.activeTab == 'login' ? 'active' : ''}
                        onClick={() => props.setActiveTab('login')}>
                        Log In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={props.activeTab == 'register' ? 'active' : ''}
                        onClick={() => props.setActiveTab('register')}>
                        Sign Up
                    </NavLink>
                </NavItem>
            </Nav>
            <ModalBody>
                <Form>
                    {props.activeTab == 'register' ?
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input type="name" name="name" id="exampleName" placeholder="Enter name" />
                        </FormGroup> : null}
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                    </FormGroup>
                    {props.activeTab == 'register' ?
                        <FormGroup>
                            <Label for="exampleConfirmPassword">Confirm Password</Label>
                            <Input type="confirmPassword" name="confirmPassword" id="exampleConfirmPassword" placeholder="Re-enter Password" />
                        </FormGroup> : null}
                </Form>
            </ModalBody>
            <ModalFooter>
                {props.activeTab == 'register' ?
                    <Button id="register" className="font-weight-bold" onClick={userRegister} block>Sign Up</Button>
                    :
                    <Button id="register" className="font-weight-bold" onClick={userLogin} block>Log In</Button>}
            </ModalFooter>
        </Modal>
    );
}

export default Account