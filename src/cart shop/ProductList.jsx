import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product._id}>
                    <img src={product.picture} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            picture: PropTypes.string.isRequired,
        })
    ).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductList;
