import React from 'react';
import Category from './category';
import { Container, Row } from 'reactstrap';


function Browse(props) {
    return (
        <Container>
            <Row>
                {props.categories.map((item, idx) =>
                    <Category
                        key={idx}
                        catdata={item}
                    />
                )}
            </Row>
        </Container>
    );
}

export default Browse