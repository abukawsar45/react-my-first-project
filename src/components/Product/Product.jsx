import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCoffee } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { id, img, name, seller, quantity, ratings, price } = props.product;
    console.log(props.product);
    const dataInfo = props.handler;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='title'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => dataInfo(name)} className='btn-cart'>
                Add to Cart  <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product; 