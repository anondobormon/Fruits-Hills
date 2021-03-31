import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    console.log(loggedInUser.email);
    const [allOrders, setAllOrders] = useState([])
    console.log(allOrders);

    useEffect(() => {
        fetch('http://localhost:5055/orders')
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
            <h4>This is order</h4>
        </div>
    );
};

export default Order;