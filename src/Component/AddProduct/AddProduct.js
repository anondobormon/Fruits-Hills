import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURl] = useState(null);



    const onSubmit = data =>{ 
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
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('sever side response', res))
    };

    const handleUploadImage= event => {
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
    return (
        <div>
            <h2>This is add product zone</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name"  ref={register} placeholder='Enter Fruit name' required/>
                <br/>
                <input name="weight"  placeholder='Enter Weight KG' ref={register} required/>
                <br/>
                <input name="price"  placeholder='Enter Price'  ref={register} required/>
                <br/>
                <input type="file" onChange={handleUploadImage} name="image" id=""/>
                

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;