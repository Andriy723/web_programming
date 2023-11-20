import React from 'react';

function Select({ options, onChange, value }) {
    return (
        <select className="select" onChange={onChange} value={value}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
