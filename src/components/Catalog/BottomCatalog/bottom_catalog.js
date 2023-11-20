function BottomCatalog() {
    return (
        <div className="bottom_catalog">
            <nav className="bottom_catalog__nav">
                <div className="bottom_catalog_h_p">
                    <h3 className="header_bottom_catalog">Branding staff</h3>
                    <p className="paragraph_bottom_catalog">
                        Choose only branding trolleybuses on this cite.
                        Don`t search for trolleybuses that will break
                        so quick. We have a quality on another level.
                    </p>
                </div>
                <div className="logo_bottom_catalog">
                    <img src="/icons/trolleybus-icon.png" id="bottom_logo" alt="bottom_catalog_logo" width="80" height="80" />
                </div>
                <div className="logos_bottom_catalog">
                    <a href="http://facebook.com"><img src="/icons/facebook.png" alt="logo1" width="40" height="40" /></a>
                    <a href="http://twitter.com"><img src="/icons/twitter.png" alt="logo2" width="40" height="40" /></a>
                    <a href="http://linkedin.com"><img src="/icons/linkedin.png" alt="logo3" width="40" height="40" /></a>
                    <a href="http://googleplus.com"><img src="/icons/google_plus.png" alt="logo4" width="40" height="40" /></a>
                </div>
            </nav>
        </div>
    );
}

export default BottomCatalog;
