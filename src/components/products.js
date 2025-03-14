import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Products() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://10.191.243.51:5000/api/products')
            .then((response) => response.json())
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => {
                console.error("Error showing products:", error);
            })
    }
    return (
        <div>
            <h1>Products</h1>
            {products && (
                <ul>
                    {products.map((product) => (
                        <li key={product.productId}>
                            <Link to={`/products/${product.productId}`}>
                            Product Name:{product.name} <br/>
                            Product Price:{product.price} <br/>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}