import React from 'react';

function Trolleybuses({ product }) {
    return (
        <div className="trolleybuses">
            <img src="/icons/trolleybus_photo.png" alt="img_object" width="320px" height="180px"/>
            <div className="trolleybuses_info">
                <h2>Title: {product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Type: {product.type}</p>
            </div>
            <div className="trolley_button">
                <button className="btn_view_more"> <a href="http://google.com">View more</a></button>
            </div>
        </div>
    );
}

export default Trolleybuses;
