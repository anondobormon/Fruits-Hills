import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [product, setProduct] = useState([])
    console.log(product)
    useEffect(() => {
        fetch('https://apple-crumble-43171.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="all-fruits">
            {
                product.length === 0 ?
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>
                    :
                    <div className='fruits-collection'>
                        {
                            product.map(pd => <AllProducts product={pd} key={pd._id}></AllProducts>)
                        }
                    </div>
            }

        </div>
    );
};

export default Home;