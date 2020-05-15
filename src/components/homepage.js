import React from 'react';
import Channel from './channel';
import { Link } from 'react-router-dom';
import {
    Container, Row, Col, Card, CardImg, CardText,
    CardBody, CardTitle
} from 'reactstrap';


function Homepage(props) {

    const channels = props.channelData.filter((channel, index) => index < 12);

    return (
        <div className="mx-5 mb-5">
            <Row className="justify-content-center mb-5">
                <h1>Welcome to Twitch!</h1>
            </Row>
            <Row>
                <h5>Live channels we think you'll like</h5>
            </Row>
            <Row>
                {channels.map((item, idx) =>
                    <Channel
                        key={idx}
                        channelData={item}
                    />
                )}
            </Row>
            <Row className="mt-5">
                <h5><Link to="/browse">Categories</Link> we think you'll like</h5>
            </Row>
            <Row>
                <Col xs="2">
                    <Card>
                        <CardImg top width="100%" src="" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Homepage