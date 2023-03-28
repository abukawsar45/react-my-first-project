import React from 'react';
import './Product.css'
const Product = (props) => {
    const { id, img, name, seller, quantity,ratings, price } = props.product;
    console.log(props.product);
    const dataInfo = props.handler;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='title'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={()=>dataInfo(name)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product; 