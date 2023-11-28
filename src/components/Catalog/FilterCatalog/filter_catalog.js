import React from 'react';
import Select from '../../Buttons/select';

function FilterCatalog({ onOptionChange, onApplyFilters, priceFilter, titleFilter, typeFilter, onCancelFilters }) {
    const handleApplyClick = () => {
        onApplyFilters();
    };

    return (
        <div className="filter_catalog">
            <nav className="header_catalog__nav1">
                <Select
                    options={[
                        { label: 'Price', value: 'price' },
                        { label: 'More than 50', value: 'more_than_50' },
                        { label: 'More than 10', value: 'more_than_10' },
                        { label: 'More than 2', value: 'more_than_2' },
                    ]}
                    value={priceFilter}
                    onChange={(event) => onOptionChange('price', event)}
                />
            </nav>
            <nav className="header_catalog__nav2">
                <Select
                    options={[
                        { label: 'Title', value: 'title' },
                        { label: 'With a number', value: 'with_number' },
                        { label: 'Without a number', value: 'without_number' },
                        { label: 'With big letters', value: 'uppercase' },
                    ]}
                    value={titleFilter}
                    onChange={(event) => onOptionChange('title', event)}
                />
            </nav>
            <nav className="header_catalog__nav3">
                <Select
                    options={[
                        { label: 'Type', value: 'type' },
                        { label: 'For 70 people', value: 'for_70people' },
                        { label: 'For 30 people', value: 'for_30people' },
                        { label: 'For 50 people', value: 'for_50people' },
                    ]}
                    value={typeFilter}
                    onChange={(event) => onOptionChange('type', event)}
                />
            </nav>
            <button className="button_apply" onClick={handleApplyClick}>Apply</button>
            <button className="button_cancel" onClick={onCancelFilters}>Cancel</button>
        </div>
    );
}

export default FilterCatalog;
