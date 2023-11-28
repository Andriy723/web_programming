import React from 'react';

const ErrorMessages = ({ errors }) => {
    return (
        <div className="error-messages">
            {Object.keys(errors).map((fieldName) => (
                <div key={fieldName} className="error-message">
                    {errors[fieldName]}
                </div>
            ))}
        </div>
    );
};

export default ErrorMessages;
