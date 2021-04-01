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
                    <div className="description des-nav">
                        <p className='name'>Description</p>
                        <p className='date'>Order Date</p>
                        <p className='weight'>Weight</p>
                        <p className='quantity'>Quantity</p>
                        <p className='price'>Price</p>
                    </div>
                    {
                        allOrders.map(odr => <div className="description">
                            <p className='name'>{odr.name}</p>
                            <p className='date'>{odr.date}</p>
                            <p className='weight'>{odr.weight}</p>
                            <p className='quantity'>1</p>
                            <p className='price'>$ {odr.price}</p>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Order;