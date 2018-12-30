import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Products extends Component {
    render() {
        return (
            <div>
                this is the page of products.
            </div>
        );
    }
}

export default  withRouter(Products);