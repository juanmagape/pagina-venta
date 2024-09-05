import React from 'react';

const AddToCart = ({ product }) => {
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} añadido a la cesta`);
    };

    return (
        <button onClick={addToCart} className="btn btn-primary mt-3">
            Añadir a la cesta
        </button>
    );
};

export default AddToCart;
