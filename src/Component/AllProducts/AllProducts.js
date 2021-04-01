import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './AllProducts.css'


const AllProducts = (props) => {
    const pd = props.product
    return (
        <div >
            <div className="card">

                <img className='card-img-top' src={pd.imageURL} />
                <h3>{pd.name}</h3>
                <div className="details">
                    
                    <h4>$ {pd.price}</h4>
                    <Link to={'/checkout/' + pd._id}>
                        <button className='btn btn-warning'>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;