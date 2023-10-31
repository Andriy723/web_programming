import Select from '../../Buttons/select';
import React, { useState } from 'react';

function FilterCatalog() {

    const [selectedOption, setSelectedOption] = useState('all');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="filter_catalog">
            <nav className="header_catalog__nav1">
                <Select
                    options={[
                        { label: 'Price', value: 'Price' },
                        { label: 'More than 50', value: '76DJHG' },
                        { label: 'More than 10', value: 'GVWUU DHU' },
                        { label: 'More than 2', value: '20-HGFff' },
                    ]}
                    value={selectedOption}
                    onChange={handleOptionChange}
                />
            </nav>
            <nav className="header_catalog__nav2">
                <Select
                    options={[
                        { label: 'Title', value: 'Title' },
                        { label: 'With a number', value: '76DJHG' },
                        { label: 'Without a number', value: 'TRHD-533' },
                        { label: 'With big letters', value: 'GVWUU DHU' },
                    ]}
                    value={selectedOption}
                    onChange={handleOptionChange}
                />
            </nav>
            <nav className="header_catalog__nav3">
                <Select
                    options={[
                        { label: 'Type', value: 'Type' },
                        { label: 'For 70 people', value: 'Product 1' },
                        { label: 'For 30 people', value: 'Product 2' },
                        { label: 'For 50 people', value: 'Product 3' },
                    ]}
                    value={selectedOption}
                    onChange={handleOptionChange}
                />
            </nav>
            <button className="button_apply">Apply</button>
        </div>
    );
}

export default FilterCatalog;
