import React from 'react';
import Channel from './channel';
import { Link } from 'react-router-dom';
import {
    Container, Row, Col, Card, CardImg, CardText,
    CardBody, CardTitle
} from 'reactstrap';


function Homepage(props) {
    // console.log(props.catData[0].id, 'homepage');
    const channels = props.channelData.filter((channel, index) => index < 12);
    const categories = props.catData.filter((category, index) => index < 12);

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
                        setCategoryPage={props.setCategoryPage}
                        setChannelPage={props.setChannelPage}
                    />
                )}
            </Row>
            <Row className="mt-5">
                <h5><Link to="/browse">Categories</Link> we think you'll like</h5>
            </Row>
            <Row>
                {categories.map((category, idx) =>
                    <Col xs="2">
                        <Card className="mb-4">
                            <CardImg top width="100%" src={category.image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="text-center"><strong><Link to="/category" onClick={() => props.setCategoryPage(category.id)}
                                    className="channelLink">{category.title}</Link></strong>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
}

export default Homepage