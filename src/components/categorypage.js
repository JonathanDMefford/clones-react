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
    return (
        <div className="mx-5 mb-5">
            <Row className="mb-5">
                <Col>
                    <h1 className="mb-4">Category Name</h1>
                    <Button className="font-weight-bold" id="register"><FontAwesomeIcon className="mr-2" icon={faHeart}/>Follow</Button>
                </Col>
            </Row>
            <Row>
                <h5 className="mt-4 mb-5" id="live"><strong>Live Channels</strong></h5>
            </Row>
            <Row className="mt-4">
                <Col xs="2">
                    <Card className="mb-4" style={{ height: "340px" }}>
                        <CardImg top width="100%" src={process.env.PUBLIC_URL + '/images/placeholder.jpg'} width="30" height="180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle><strong><Link to="#" className="channelLink">Channel Title</Link></strong></CardTitle>
                            <CardText>
                                <Link to="#" className="userLink">User Name</Link>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default CategoryPage