import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css'

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    console.log(loggedInUser.email);
    const [allOrders, setAllOrders] = useState([])
    console.log(allOrders);

    useEffect(() => {
        fetch('https://apple-crumble-43171.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const orders = data.filter(od => od.email === email);
                console.log(orders);
                setAllOrders(orders);
            })
    }, [])

    return (
        <div>
            <div className="checkout">
                <h2>Your Order's</h2>
                <div className='check'>
                    <div className="ord-details description-nav">
                        <p className='product-details'>Description</p>
                        <p className='product-details'>Order Date</p>
                        <p className='product-details'>Weight</p>
                        <p className='product-details'>Quantity</p>
                        <p className='product-details'>Price</p>
                    </div>
                    {
                        allOrders.map(odr => <div className="ord-details">
                            <p className='product-details'>{odr.name}</p>
                            <p className='product-details'>{odr.date}</p>
                            <p className='product-details'>{odr.weight}</p>
                            <p className='product-details'>1</p>
                            <p className='product-details'>$ {odr.price}</p>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Order;