import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);
        const dataInfo = (product) => {
            const newCart = [...cart, product];
            setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map((product) => <Product key={product.id}
                        handler={dataInfo}
                        product={product} />)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>total: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;