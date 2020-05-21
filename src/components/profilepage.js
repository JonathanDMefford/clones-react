import React, { useState } from 'react';
import classnames from 'classnames';
import { Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';


function Profile(props) {

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="mx-5 mb-5">
            <Row className="mb-5">
                <h1><strong>Settings</strong></h1>
            </Row>
            <Nav tabs className="mb-4">
                <NavItem>
                    <NavLink
                        id="profile"
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}>
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        id="profile"
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}>
                        Channel
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <h4 className="mb-4">Profile Picture</h4>
                    <Row className="mb-5 border p-3">
                        <img className="border rounded-circle mr-3" src={process.env.PUBLIC_URL + '/images/profileplaceholder.png'} width="300" height="300" alt="profile image" />
                        <Col className="mt-5 pt-5">
                            <Button className="mb-4" color="secondary" size="sm"><strong>Add Profile Picture</strong></Button>
                            <p>Must be JPEG, PNG, or GIF cannot exceed 10MB.</p>
                        </Col>
                    </Row>
                    <h4>Profile Info</h4>
                    <Row className="border p-3">
                        <Col>
                            <h6 className="mb-3"><strong>Name: </strong>{props.user.name}</h6>
                            <h6><strong>Email: </strong>{props.user.email}</h6>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    Nothing to display
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Profile