import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function HeaderCatalog({ onSearchChange, onClearSearch }) {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchText(searchValue);
        onSearchChange(searchValue);
    };

    const clearSearch = () => {
        setSearchText('');
        onClearSearch();
    };

    const handleHomeClick = () => {
        const storedEmail = localStorage.getItem('email');
        const lastLoginTime = localStorage.getItem('lastLoginTime');
        const timeWindow = 60 * 1000;

        const isValidUser = storedEmail && lastLoginTime && Date.now() - parseInt(lastLoginTime) < timeWindow;

        if (isValidUser) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    };

    const handleCartClick1 = () => {
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
        <header>
            <div className="header_catalog">
                <nav className="header_catalog__nav">
                    <div className="header_catalog__nav-logo">
                        <img src="/icons/trolleybus-icon.png" alt="header_catalog_logo" width="80" height="80" />
                    </div>
                    <div className="header_catalog__nav-buttons">
                        <Link to="/">
                            <h2><button type="button" className="header_catalog__category" onClick={handleHomeClick}>
                                <a href="http://localhost:3000/">Home</a></button></h2>
                        </Link>
                        <Link to="/catalog">
                            <h2>
                                <button type="button" className="header_catalog__category1">
                                    <a href="http://localhost:3000/catalog">Catalog</a>
                                </button>
                            </h2>
                        </Link>
                        <Link to="/cart">
                            <h2>
                                <button type="button" className="header_catalog__category" onClick={handleCartClick1}>
                                    <a href="http://localhost:3000/cart">Cart</a>
                                </button>
                            </h2>
                        </Link>
                    </div>
                    <div className="button_search">
                        <input className="search_btn" type="search" value={searchText} placeholder="  Search..."
                               onChange={handleSearchChange}></input>
                    </div>
                    <button className="clear_search_btn" onClick={clearSearch}>Clear</button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderCatalog;
