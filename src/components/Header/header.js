function Main_part() {
    return (
        <header>
            <div className="header">
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <img src="/icons/trolleybus-icon.png" alt="header_logo" width="80" height="80" />
                    </div>
                    <div className="header__nav-buttons">
                        <h2><button type="button" className="header__category">
                            <a href="#Home">Home</a></button></h2>
                        <h2><button type="button" className="header__category">
                            <a href="#Catalog">Catalog</a></button></h2>
                        <h2><button type="button" className="header__category">
                            <a href="#Cart">Cart</a></button></h2>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Main_part;
