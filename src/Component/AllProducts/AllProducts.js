import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const pd = props.product
    return (
        <div>
            <h3>This is product</h3>
            <div className="card">
                        <h4>{pd.name}</h4>
                        <h4>{pd.weight}</h4>
                        <h4>{pd.price}</h4>
                        <img src={pd.imageURL}/>
                        <Link to={'/checkout/'+ pd._id}>
                            <button>Buy Now</button>
                        </Link>
                    </div>
        </div>
    );
};

export default AllProducts;