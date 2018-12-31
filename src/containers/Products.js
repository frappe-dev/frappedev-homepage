import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ProductCard from '../components/ProductCard'

class Products extends Component {
    render() {
        return (
            <div>
                this is the page of products.
                <ProductCard
                  productName = "Fast Idea"
                  releaseDate = "2018年8月14日"
                  imagePath = "/images/fastidea-icon.png"
                  productSumary = "ここにアプリのようやくを入れる"
                  />
                <ProductCard
                  productName = "Tip Off"
                  releaseDate = "2018年12月12日"
                  imagePath = "/images/tipoff-icon.png"
                  productSumary = "ここにアプリのようやくを入れる"
                  />
            </div>
        );
    }
}

export default  withRouter(Products);
