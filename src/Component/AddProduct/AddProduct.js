import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURl] = useState(null);
    const [manageProduct, setManageProduct] = useState({
        add: 'add'
    })



    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addProducts`;
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                alert('Product Added Successfully')
                // console.log('sever side response', res)
            })
    };

    const handleUploadImage = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '54f8ad2746e4238bf47c906854d1de16');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURl(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleManage = (e) => {
        console.log('object');
        if (e.target.name === 'manage') {
            console.log('managing');
            const toggleProduct = {...manageProduct}
            toggleProduct.add = 'manage';
            setManageProduct(toggleProduct)
        }
        if (e.target.name === 'edit') {
            console.log('managing');
            const toggleProduct = {...manageProduct}
            toggleProduct.add = 'edit';
            setManageProduct(toggleProduct)
        }
        if (e.target.name === 'add') {
            console.log('managing');
            const toggleProduct = {...manageProduct}
            toggleProduct.add = 'add';
            setManageProduct(toggleProduct)
        }
    }
    return (
        <div>

            <div className='add-product'>


                <div className='sidenav'>
                    <h4>FRUITS HILLS</h4>
                    <div className="manage">
                        {/* <p onClick={handleManage} name='manage'>Manage product</p>
                        <p onClick={handleManage} name='add'>Add product</p>
                        <p onClick={handleManage} name='edit'>Edit product</p> */}
                        <button onClick={handleManage} name='manage'>Manage product</button>
                        <button onClick={handleManage} name='add'>Add product</button>
                        <button onClick={handleManage} name='edit'>Edit product</button>
                    </div>
                </div>


                {manageProduct.add === 'add' && <div className="pd">
                    <form className='product-card' onSubmit={handleSubmit(onSubmit)}>
                        <h2>Add Product</h2>
                        <div className="product-info">

                            <div className="add-product-details">
                                <div className="pd-info">
                                    <p>Product Name</p>
                                    <input name="name" ref={register} placeholder='Enter Fruit name' required />
                                </div>

                                <div className="pd-info">
                                    <p>Product Name</p>
                                    <input name="weight" placeholder='Enter Weight KG' ref={register} required />
                                </div>

                                <div className="pd-info">
                                    <p>Product Name</p>
                                    <input name="price" placeholder='Enter Price' ref={register} required />
                                </div>

                                <div className="pd-info">
                                    <p>Product Name</p>
                                    <input type="file" onChange={handleUploadImage} name="image" id="" />
                                </div>
                            </div>
                        </div>
                        <input className='submit' type="submit" value='Add Product' />
                    </form>
                </div>}
                {manageProduct.add === 'manage' && <div className="pd">
                    <p>This is manage</p>
                </div>}
                {manageProduct.add === 'edit' && <div className="pd">
                    <p>This is edit</p>
                </div>}

            </div>
        </div>

    );
};

export default AddProduct;