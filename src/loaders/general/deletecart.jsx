import React from 'react';

const deleteCart = ({ productName, onRemove }) => {
    const removeFromCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const updatedCart = cart.filter(item => item.name !== productName);

        localStorage.setItem('cart', JSON.stringify(updatedCart));

        onRemove(updatedCart);
    };

    return (
        <button onClick={removeFromCart} className="btn btn-danger mt-3">
            Eliminar del carrito
        </button>
    );
};

export default deleteCart;