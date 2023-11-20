function Header() {
    return (
        <header>
            <div className="header">
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <img src="/icons/trolleybus-icon.png" alt="header_logo" width="80" height="80" />
                    </div>
                    <div className="header__nav-buttons">
                        <a href="http://localhost:3000/Home">
                            <h2><button type="button" className="header__category1">
                            <a href="http://localhost:3000/Home">Home</a></button></h2>
                        </a>
                        <a href="http://localhost:3000/Catalog">
                            <h2><button type="button" className="header__category">
                            <a href="http://localhost:3000/Catalog">Catalog</a></button></h2>
                        </a>
                        <a href="http://localhost:3000/Cart">
                            <h2><button type="button" className="header__category">
                            <a href="http://localhost:3000/Cart">Cart</a></button></h2>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
