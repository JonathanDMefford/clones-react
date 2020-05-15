import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function Profile(props) {
    return (
        <Container>
            <Row>
                <h5>{props.user.name}</h5>
                <h5>{props.user.email}</h5>
            </Row>
        </Container>
    );
}

export default Profile