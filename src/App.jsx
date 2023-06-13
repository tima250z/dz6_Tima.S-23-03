import React, { useState } from 'react';
import Navbar from './cart shop/Navbar.jsx';
import ProductList from './cart shop/ProductList.jsx';
import productsData from './data/products.jsx';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div>
            <Navbar cartItems={cartItems.length} />
            <ProductList products={productsData} addToCart={addToCart} />
        </div>
    );
};

export default App;
