import React from 'react';
import { Row, Col, Button, Table } from 'reactstrap';


function AdminPage(props) {

    const users = props.data.filter(item => item.user);
    console.log(props.data, 'admin');

    return (
        <div className="mx-5 mb-5">
            <h1 className="text-center mb-3">Admin</h1>
            <Row className="justify-content-center">
                <Col xs="10">
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Ban</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{item.user.id}</th>
                                        <td>{item.user.name}</td>
                                        <td>{item.user.email}</td>
                                        <td><Button color="danger" size="sm">Remove User</Button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default AdminPage