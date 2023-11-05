import React from 'react';

function PrimaryButton({ children, onClick }) {
    return (
        <button type="button" className="primary-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default PrimaryButton;
