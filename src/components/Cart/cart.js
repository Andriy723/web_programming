import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from './Redux/actions';
import HeaderCart from './HeaderCart/header_cart';
import ButtonsCart from './ButtonsCart/buttons_cart';
import Bottom from '../Home/Bottom/bottom';
import Footer from '../Home/Footer/footer';
import { Link } from 'react-router-dom';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            dispatch({ type: 'LOAD_CART', payload: storedCart });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleRemoveFromCart = (itemId, itemName) => {
        const itemToRemove = cartItems.find((item) => item.id === itemId);

        if (itemToRemove && itemToRemove.quantity === 1) {
            const shouldRemove = window.confirm(`Are you sure you want to remove ${itemName} from the cart?`);

            if (!shouldRemove) {
                return;
            }
        }

        dispatch(removeFromCart(itemId));
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

        setTimeout(() => {}, 2000);
    };

    const handleClearCart = () => {
        const shouldClear = window.confirm('Are you sure you want to clear the cart?');
        if (shouldClear) {
            dispatch(clearCart());
        }
    };

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <HeaderCart />
            <h3>Shopping Cart</h3>
            {cartItems.length === 0 ? (
                <p className="empty_cart">
                    Your cart is empty...<br />
                    <br />
                    Go shopping!
                </p>
            ) : (
                <div className="items_cart">
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <Link to={`/items/${item.id}`}>
                                        <img src="/icons/trolleybus_photo.png" alt="Trolleybus" width="270" height="170" />
                                    </Link>
                                    <div className="title_price_buttons">
                                        <h3>
                                            <Link to={`/items/${item.id}`}>{item.title}</Link>
                                        </h3>
                                        <div className="button_cart_delete">
                                            <button onClick={() => handleRemoveFromCart(item.id, item.title)}>
                                                <img src="/icons/delete.png" alt="delete_button" width="40" height="40" />
                                            </button>
                                        </div>
                                        <h2>{item.quantity}</h2>
                                        <div className="button_cart_add">
                                            <button onClick={() => handleAddToCart(item)}>
                                                <img src="/icons/add.png" alt="add_button" width="40" height="40" />
                                            </button>
                                        </div>
                                        <div className="price_cart">
                                            <p>Price: ${item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="total_amount">
                        <p className="total_price_text">Total Amount:</p>
                        <p className="total_price">${calculateTotalAmount()}</p>
                    </div>
                    <div className="container">
                        <div className="center">
                            <button className="btn" onClick={handleClearCart}>
                                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                </svg>
                                <span>Clear Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ButtonsCart />
            <Bottom />
            <Footer />
        </div>
    );
}

export default Cart;
