import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ProductCard from '../components/ProductCard'

class Products extends Component {
    render() {
        return (
            <div>
                this is the page of products.
                <ProductCard/>
            </div>
        );
    }
}

export default  withRouter(Products);
