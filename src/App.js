import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/Home/Header/header.css';
import './components/Cart/HeaderCart/header_cart.css';
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
import './components/Cart/cart.css';
import './components/Home/Footer/footer.css';
import './components/Loader/loader.css';
import './components/Catalog/FilterCatalog/filter_catalog.css';
import Catalog from './components/Catalog/catalog';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';
import ItemPage from './components/Catalog/Item/item';
import {Provider} from "react-redux";
import store from './components/Cart/Redux/store';

const trolleybusesItemList = [
    // { id: 1, img: <img src="/icons/big_trolleybus.png" alt="photo1" width="370" height="220" />, title: 'TRHD-533', description: 'hrrehre', price: 10.00, type: 'for_50people' },
    // { id: 2, title: 'GYUJNE-222', description: 'hetfd', price: 8, type: 'for_70people' },
    // { id: 3, title: '76DJHG', description: 'kinjte', price: 2, type: 'for_30people' },
    // { id: 4, title: 'GYEBGEY', description: 'rfvghuytrdhjytfd', price: 45, type: 'for_70people' },
    // { id: 5, title: 'GVWUU DHU', description: 'kikuytffgytrfdfghytrfrdrgtr', price: 55, type: 'for_50people' },
    // { id: 6, title: '20-HGFff', description: 'arggr', price: 67, type: 'for_30people' },
];

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/Catalog" element={<Catalog />}/>
                        <Route path="/Cart" element={<Cart />}/>
                        <Route path="/items/:id" element={<ItemPage trolleybusesItemList={trolleybusesItemList} />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
