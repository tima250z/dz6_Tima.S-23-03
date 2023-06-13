import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ cartItems }) => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Cart ({cartItems})</li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    cartItems: PropTypes.number.isRequired,
};

export default Navbar;
