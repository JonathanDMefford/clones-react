import React from 'react';
import { Link } from 'react-router-dom';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardHeader, CardFooter, Button, Form,
    FormGroup, Label, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ChannelPage(props) {
    const channel = props.channelPage === 0 ? {} : props.data.find(item => item.id === props.channelPage);
    console.log(props.channelPage, 'channel page');

    return (
        <div className="mx-5 mb-5">
            <Row>
                <Col xs="9" className="pr-0">
                    <Card>
                        <CardHeader>
                            {channel.user.name}<FontAwesomeIcon id="register" className="ml-1 mr-3" icon={faCheckSquare} />
                            <Button color="danger" size="sm"><strong>LIVE</strong></Button>
                        </CardHeader>
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/images/placeholder.jpg'} alt="Card image cap" />
                        <CardBody>
                            <CardTitle><h4>{channel.title}</h4></CardTitle>
                            <CardText>Category: <Link to="/category" onClick={() => props.setCategoryPage(channel.category.id)}
                                className="catLink">{channel.category.title}</Link>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ChannelPage