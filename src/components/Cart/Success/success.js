import React from 'react';
import {Link} from "react-router-dom";
import HeaderCart from "../HeaderCart/header_cart";
import Bottom from "../../Home/Bottom/bottom";
import Footer from "../../Home/Footer/footer";
import { Checkmark } from 'react-checkmark'

const Success = () => {
    return (
        <div>
            <HeaderCart/>
            <div className="checkmark-container">
                <Checkmark size="145px" className="checkmark" />
            </div>
            <h1 className="header_success">Success!</h1>
            <p className="paragraph_success">Your order was send to processing!
                <br/>Check your email box for further information.</p>
            <Link to="/Catalog">
                <button className="back_catalog_success">Back to Catalog</button>
            </Link>
            <Bottom/>
            <Footer/>
        </div>
    );
};

export default Success;
