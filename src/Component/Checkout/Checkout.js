import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {

    const { _id } = useParams();
    const [newOrder, setNewOrder] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(newOrder);
    const [emptyOrder, setEmptyOrder] = useState({
        name: null,
        price: null
    });

    

    // const {name, price} = newOrder

    useEffect(() => {
        fetch('https://apple-crumble-43171.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                // setNewOrder(emptyOrder)
                const recentOrder = data.filter(pd => pd._id === _id);
                const order = [...recentOrder];
                // order[0].date = new Date();
                // order[0]._id = '';
                // order[0].email = loggedInUser.email;
                // // console.log(order[0].name);
                const placeOrder = {
                    date: new Date(),
                    email: loggedInUser.email,
                    imageURL: order[0].imageURL,
                    name: order[0].name,
                    price: order[0].price,
                    weight: order[0].weight

                }

                setNewOrder(placeOrder)
                setEmptyOrder(order[0])
                // console.log(recentOrder);

            })
    }, []);



    const handleCheckout = () => {

        const url = `https://apple-crumble-43171.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                console.log('sever side response', res)
                alert('Order has Confirm')
            })

    }




    return (
        <div className='checkout-section'>

            <div className="checkout">
                <h1>Checkout</h1>
                <div className='check'>
                    <div className="description">
                        <p className='order-name'>Description</p>
                        <p className='order-quantity'>Quantity</p>
                        <p className='order-price'>Price</p>

                    </div>
                    <div className="description">
                        <p className='order-name'>{emptyOrder.name !== null && emptyOrder.name}</p>
                        <p className='order-quantity'>1</p>
                        <p className='order-price'>$ {emptyOrder.price !== null && emptyOrder.price}</p>

                    </div>
                    <div className="total">
                        <p className='total-amount'>Total</p>
                        <p className='dollar'>$ {emptyOrder.price !== null && emptyOrder.price}</p>
                    </div>
                </div>
                <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;