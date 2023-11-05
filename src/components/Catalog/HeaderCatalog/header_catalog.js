import {useState} from "react";

function HeaderCatalog({ onSearchChange, onClearSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setSearchText(searchValue);
        onSearchChange(searchValue);
    };

    const clearSearch = () => {
        setSearchText('');
        onClearSearch();
    };

    return (
        <header>
            <div className="header_catalog">
                <nav className="header_catalog__nav">
                    <div className="header_catalog__nav-logo">
                        <img src="/icons/trolleybus-icon.png" alt="header_catalog_logo" width="80" height="80" />
                    </div>
                    <div className="header_catalog__nav-buttons">
                        <h2><button type="button" className="header_catalog__category">
                            <a href="http://localhost:3000/Home">Home</a></button></h2>
                        <h2><button type="button" className="header_catalog__category1">
                            <a href="http://localhost:3000/Catalog">Catalog</a></button></h2>
                        <h2><button type="button" className="header_catalog__category">
                            <a href="http://localhost:3000/Cart">Cart</a></button></h2>
                    </div>
                    <div className="button_search">
                        <input className="search_btn" type="search" value={searchText} placeholder="  Search..."
                               onChange={handleSearchChange}></input>
                    </div>
                    <button className="clear_search_btn" onClick={clearSearch}>Clear</button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderCatalog;
