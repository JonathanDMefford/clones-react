import React from 'react';
import Category from './category';
import { Container, Row } from 'reactstrap';
import axios from 'axios';


class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        let result = await axios.get('http://127.0.0.1:8000/api/categories')
            .then(function (response) {
                console.log(response);
                return response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        console.log(result, 'result');
        this.setState({
            categories: result
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.categories.map((item, idx) =>
                    <Category
                    key={idx}
                    catdata={item}
                    />
                    )}
                </Row>
            </Container>
        );
    }
}

export default Browse