import { Link } from "react-router-dom";
import React from "react";

function ButtonsCart({ hasItemsInCart }) {
    return (
        <div className="buttons_cart">
            <div className="cart_back_continue">
                <Link to="/Catalog">
                    <button className="back_cart">
                        <span>Back to Catalog</span>
                    </button>
                </Link>
                {hasItemsInCart ? (
                    <Link to="/Checkout">
                        <button className="continue_cart">
                            <span>Continue</span>
                        </button>
                    </Link>
                ) : (
                    <button className="continue_cart" disabled>
                        <span>Continue</span>
                    </button>
                )}
            </div>
        </div>
    );
}

export default ButtonsCart;
