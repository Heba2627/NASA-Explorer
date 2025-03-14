import React, { useEffect ,useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ShowProduct()
{
    const {id}=useParams();
    const [productQuantity, setProductQuantity] = useState(0);
    let navigate = useNavigate();

    const [products,setProducts]=useState([]);
    const [product,setProduct]=useState(null);
  
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

        function getProductsById(id) {
            const product=products.find((product) => product.productId === id);
            setProduct(product);
        }

        function add() {
            fetch('http://10.191.243.51:5000/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: id,
                    quantity: productQuantity,
                }),
            })
        }

        return (
            <div>
                <h1>Product</h1>
                {
                    getProductsById(id)
                }
                {
                product && (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.stock}</p>
                        <input type="number" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} />
                        <br />
                        <button onClick={add}>Add to Cart</button>
                    </div>
                )}
            </div>
        )   
}