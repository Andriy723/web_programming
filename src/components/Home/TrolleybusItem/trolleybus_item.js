import React from 'react';

function Trolleybuses_item({ product }) {
    return (
        <div className="trolleybuses_item">
            <img src={product.src} alt="photo2" width="370" height="220" />
            <div className="trolleybuses_item_info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default Trolleybuses_item;
