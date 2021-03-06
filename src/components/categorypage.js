import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle
} from 'reactstrap';


function CategoryPage(props) {

    const channels = props.categoryPage === 0 ? [] : props.data.filter(item => item.category.id === props.categoryPage);
    const category = props.categoryPage === 0 ? [] : props.catData.find(item => item.id === props.categoryPage);
    console.log(channels);

    return (
        <div className="mx-5 mb-5">
            {channels ? (
                <>
                    <Row className="mb-5">
                        <img src={category.image} style={{ maxHeight: "240px" }}className="img-fluid"/>
                        <Col className="mt-5 ml-3">
                            <h1 className="mb-4">{category.title}</h1>
                            <Button className="font-weight-bold" id="register"><FontAwesomeIcon className="mr-2" icon={faHeart} />Follow</Button>
                        </Col>
                    </Row>
                    <Row>
                        <h5 className="mt-4 mb-5" id="live"><strong>Live Channels</strong></h5>
                    </Row>
                    <Row className="mt-4">
                        {channels.map((channel, index) => {
                            return (
                                <Col xs="12" sm="6" md="4" lg="2" >
                                    <Card className="mb-4" style={{ height: "30vh" }}>
                                        <CardImg className="img-fluid"src={process.env.PUBLIC_URL + '/images/placeholder.jpg'}
                                            alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><strong><Link to="/channel" onClick={() => props.setChannelPage(channel.id)}
                                                className="channelLink text-truncate">{channel.title}</Link></strong>
                                            </CardTitle>
                                            <CardText>
                                                <Link to="#" className="userLink text-truncate">{channel.user.name}</Link>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </>
            ) : null}
        </div>
    );
}

export default CategoryPage