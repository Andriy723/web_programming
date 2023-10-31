import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/Home/Header/header.css'
import './components/Catalog/HeaderCatalog/header_catalog.css'
import './components/Home/MainPart/main_part.css'
import './components/Home/PhotosPart/photos_part.css'
import './components/Home/Bottom/bottom.css'
import './components/Catalog/BottomCatalog/bottom_catalog.css'
import './components/Catalog/Trolleybuses/trolleybuses.css'
import './components/Home/Footer/footer.css'
import './components/Catalog/FilterCatalog/filter_catalog.css'
import Catalog from './components/Catalog/catalog';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Catalog" element={<Catalog/>} />
                    <Route path="/Cart" element={<Cart/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
