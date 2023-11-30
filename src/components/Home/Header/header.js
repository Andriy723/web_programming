import {Link, useNavigate} from "react-router-dom";
import React from "react";

function Header() {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        const storedEmail = localStorage.getItem('email');
        const lastLoginTime = localStorage.getItem('lastLoginTime');
        const timeWindow = 60 * 1000;

        const isValidUser = storedEmail && lastLoginTime && Date.now() - parseInt(lastLoginTime) < timeWindow;

        if (isValidUser) {
            navigate('/catalog');
        } else {
            navigate('/login');
        }
    };

    const handleCartClick = () => {
        const storedEmail = localStorage.getItem('email');
        const lastLoginTime = localStorage.getItem('lastLoginTime');
        const timeWindow = 60 * 1000;

        const isValidUser = storedEmail && lastLoginTime && Date.now() - parseInt(lastLoginTime) < timeWindow;

        if (isValidUser) {
            navigate('/cart');
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="header_">
            <div className="header">
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <img src="/icons/trolleybus-icon.png" alt="header_logo" width="80" height="80" />
                    </div>
                    <div className="header__nav-buttons">
                        <Link to="/">
                            <h2><button type="button" className="header__category_home1">
                                <a href="http://localhost:3000/">Home</a></button></h2>
                        </Link>
                        <Link to="/catalog">
                            <h2><button type="button" className="header__category_home" onClick={handleCatalogClick}>
                                <a href="http://localhost:3000/catalog">Catalog</a></button></h2>
                        </Link>
                        <Link to="/cart">
                            <h2><button type="button" className="header__category_home" onClick={handleCartClick}>
                                <a href="http://localhost:3000/cart">Cart</a></button></h2>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
