import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './components/Home/Header/header.css';
import './components/Cart/HeaderCart/header_cart.css';
import './components/Cart/Form/checkout_form.css';
import './components/Cart/Success/success.css';
import './components/Cart/ButtonsCart/buttons_cart.css';
import './components/Catalog/HeaderCatalog/header_catalog.css';
import './components/Home/MainPart/main_part.css';
import './components/Home/PhotosPart/photos_part.css';
import './components/Home/Bottom/bottom.css';
import './components/Catalog/BottomCatalog/bottom_catalog.css';
import './components/Catalog/Trolleybuses/trolleybuses.css';
import './components/Home/TrolleybusItem/trolleybuses_item.css';
import './components/Catalog/Item/item.css';
import './components/Home/home.css';
import './components/Login/login.css'
import './components/Registration/registration.css'
import './components/Cart/cart.css';
import './components/Home/Footer/footer.css';
import './components/Loader/loader.css';
import './components/Catalog/FilterCatalog/filter_catalog.css';
import './App.css'
import Catalog from './components/Catalog/catalog';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';
import ItemPage from './components/Catalog/Item/item';
import { Provider } from 'react-redux';
import store from './components/Cart/Redux/store';
import Checkout from './components/Cart/Form/checkout_form';
import Success from './components/Cart/Success/success';
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";

const trolleybusesItemList = [];

const ProtectedRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const lastLoginTime = localStorage.getItem('lastLoginTime');

        if (storedEmail && lastLoginTime) {
            const elapsedTime = Date.now() - parseInt(lastLoginTime);

            const timeWindow = 60 * 1000;

            if (elapsedTime < timeWindow) {
                setIsAuthenticated(true);
            } else {
                handleLogout();
            }
        }
    }, []);

    const handleLogout = () => {
        const storedEmail = localStorage.getItem('email');

        const userConfirmed = window.confirm('Are you sure you want to sign out?');

        if (userConfirmed) {
            if (storedEmail) {
                localStorage.setItem('lastLoggedOutEmail', storedEmail);
            }

            localStorage.removeItem('lastLoginTime');
            setIsAuthenticated(false);
        }
    };

    const handleLogin = (email) => {
        localStorage.setItem('email', email);
        localStorage.setItem('lastLoginTime', Date.now().toString());
        setIsAuthenticated(true);
        alert('You have been successfully log in!');
    };

    return (
        <Provider store={store}>
            <Router>
                <div>
                    {isAuthenticated && (
                        <button className="button_app" onClick={handleLogout}>Sign out</button>
                    )}
                    <Routes>
                        <Route
                            path="/login"
                            element={<Login setIsAuthenticated={setIsAuthenticated} setRegisteredEmail={setRegisteredEmail} onLogin={handleLogin} />}
                        />
                        <Route
                            path="/register"
                            element={<Registration setIsAuthenticated={setIsAuthenticated} onRegister={handleLogin} />}
                        />
                        <Route
                            path="/*"
                            element={<ProtectedRoute element={<Home />} isAuthenticated={isAuthenticated} storedEmail={localStorage.getItem('email')} lastLoginTime={localStorage.getItem('lastLoginTime')} />}
                        />
                        <Route
                            path="/catalog"
                            element={<ProtectedRoute element={<Catalog />} isAuthenticated={isAuthenticated} storedEmail={localStorage.getItem('email')} lastLoginTime={localStorage.getItem('lastLoginTime')} />}
                        />
                        <Route
                            path="/cart"
                            element={<ProtectedRoute element={<Cart />} isAuthenticated={isAuthenticated} storedEmail={localStorage.getItem('email')} lastLoginTime={localStorage.getItem('lastLoginTime')} />}
                        />
                        <Route
                            path="/checkout"
                            element={<ProtectedRoute element={<Checkout />} isAuthenticated={isAuthenticated} storedEmail={localStorage.getItem('email')} lastLoginTime={localStorage.getItem('lastLoginTime')} />}
                        />
                        <Route
                            path="/success"
                            element={<ProtectedRoute element={<Success />} isAuthenticated={isAuthenticated} storedEmail={localStorage.getItem('email')} lastLoginTime={localStorage.getItem('lastLoginTime')} />}
                        />
                        <Route
                            path="/items/:id"
                            element={<ProtectedRoute element={<ItemPage trolleybusesItemList={trolleybusesItemList} />} isAuthenticated={isAuthenticated} storedEmail={localStorage.getItem('email')} lastLoginTime={localStorage.getItem('lastLoginTime')} />}
                        />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
