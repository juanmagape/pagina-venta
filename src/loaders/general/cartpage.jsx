import React, { useState, useEffect } from 'react';
import RemoveFromCart from './deletecart.jsx'

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleRemove = (updatedCart) => {
        setCart(updatedCart);
    };

    return (
        <div className="container mb-5">
            <h3 className="separTop mb-5">Tu Carrito de Compras</h3>
            {cart.length === 0 ? (
                <p>No tienes productos en la cesta.</p>
            ) : (
                <div className="row g-4 justify-content-center ">
                    {cart.map((item) => (
                        <div key={item.name} className="col-md-4 col-sm-6">
                            <div className="card">
                                <div className="d-flex justify-content-center align-items-center p-3 wfotov">
                                    <img src={item.img} className="img-fluid w-50" alt={item.name} />
                                </div>
                                <div className="card-body text-center">
                                    <p className="card-title">{item.name}</p>
                                    <p className="card-text">Precio: {item.price}€</p>
                                    <p className="card-text">Cantidad: {item.quantity}</p>

                                    <RemoveFromCart 
                                        productName={item.name} 
                                        onRemove={handleRemove} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;    