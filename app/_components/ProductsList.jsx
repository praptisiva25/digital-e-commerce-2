"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "../../components/ui/button";
import ProductCardItem from "./ProductCardItem"
import Products from '../_mockData/Products';

function ProductsList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        // Replace 'Products' with your actual data or API call
        setProductList(Products);
    }, []);

    return (
        <div>
            <h2 className="font-bold text-xl flex justify-between items-center">
                Featured
                <span><Button>View All</Button></span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
                {productList.map((product, index) => (
                    <ProductCardItem product={product} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ProductsList
