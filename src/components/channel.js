import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import {
    Col, Card, CardImg, CardText,
    CardBody, CardTitle
} from 'reactstrap';


function Channel(props) {
    return (
        <Col xs="12" sm="6" md="4" lg="2">
            <Card className="mb-4" style={{ height: "32vh" }}>
                <CardImg className="img-fluid" src={process.env.PUBLIC_URL + '/images/placeholder.jpg'} alt="Card image cap" />
                <CardBody>
                    <CardTitle><strong><Link to="/channel" onClick={() => props.setChannelPage(props.channelData.id)}
                        className="channelLink text-truncate">{props.channelData.title ? props.channelData.title : null}</Link></strong>
                    </CardTitle>
                    <CardText>
                        <Link to="#" className="userLink text-truncate" href="#">{props.channelData.user.name}</Link>
                        <br></br>
                        <Link to="/category" onClick={() => props.setCategoryPage(props.channelData.category.id)}
                            className="channelLink">{props.channelData.category.title}
                        </Link>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Channel