import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { Col, Card, CardImg, CardText,
    CardBody, CardTitle } from 'reactstrap';


function Channel(props) {
    return (
    <Col xs="2">
        <Card className="mb-4" style={{ height: "340px" }}>
            <CardImg top width="100%" src={process.env.PUBLIC_URL + '/images/placeholder.jpg'} width="30" height="180" alt="Card image cap" />
            <CardBody>
                <CardTitle><strong><Link to="#" className="channelLink">{props.channelData.title ? props.channelData.title : null}</Link></strong></CardTitle>
                <CardText>
                    <Link to="#" className="userLink" href="#">{props.channelData.user.name}</Link>
                    <br></br>
                    <Link to="/category" onClick={() => props.setCategoryPage(props.channelData.category.id)} className="channelLink">{props.channelData.category.title}</Link>
                </CardText>
            </CardBody>
        </Card>
    </Col>
    );
}

export default Channel