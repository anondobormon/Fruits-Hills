import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import './Home.css'

const Home = () => {
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        fetch('http://localhost:5055/allProducts')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            {
               product.map(pd => <AllProducts product={pd} key={pd._id}></AllProducts>)
            }
        </div>
    );
};

export default Home;