import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const axios = require('axios');


class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async displayCategories() {
        let result = await axios.get('http://127.0.0.1:8000/api/categories')
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        
        console.log(result)
        this.setState({
            categories: result
        });
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Container>
                
            </Container>
        );
    }
}

export default Category