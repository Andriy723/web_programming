import React from 'react';
import { Link } from 'react-router-dom';

function Trolleybuses({ product }) {
    return (
        <div className="trolleybuses">
            <img src="/icons/trolleybus_photo.png" alt="img_object" width="320px" height="180px" />
            <div className="trolleybuses_info">
                <h2>Title: {product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Type: {product.type}</p>
            </div>
            <div className="trolleybus_btn">
                <Link to={`/items/${product.id}`}>
                    <button className="btn_view_more">View more</button>
                </Link>
            </div>
        </div>
    );
}

export default Trolleybuses;
