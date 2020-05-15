import React from 'react';
import './nav.css';
import { Col, Card, CardImg, CardText,
    CardBody, CardTitle } from 'reactstrap';


function Channel(props) {
    return (
    <Col xs="2">
        <Card className="mb-4" style={{ height: "340px" }}>
            <CardImg top width="100%" src={process.env.PUBLIC_URL + '/images/placeholder.jpg'} width="30" height="180" alt="Card image cap" />
            <CardBody>
                <CardTitle><strong><a className="channelLink" href="#">{props.channelData.title ? props.channelData.title : null}</a></strong></CardTitle>
                <CardText>
                    <a className="userLink" href="#">{props.channelData.user.name}</a>
                    <br></br>
                    <a className="channelLink" href="#">{props.channelData.category.title}</a>
                </CardText>
            </CardBody>
        </Card>
    </Col>
    );
}

export default Channel