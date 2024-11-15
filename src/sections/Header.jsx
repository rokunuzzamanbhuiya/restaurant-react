

const Header = () => {
    return (
        <>
            <header>
                <div id="ts-sticky-header" className="ts-header-area ts-transparent-header">
                <div className="container">
                    <div className="row">
                    <div className="ts-header-main d-flex align-items-center justify-content-between">
                        <div className="col-xl-9 d-flex justify-content-start">
                        <div className="ts-header-left d-flex align-items-center">
                            <div className="ts-header-logo">
                            <a href="#"><img src="assets/img/header/logo.png" alt="Restaurant Logo" /></a>
                            </div>
                            <div className="ts-header-menu d-none d-xl-flex">
                            <nav className="ts-mobile-menu-active">
                                <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#food">Portfolio</a></li>
                                <li><a href="#testimonial">Clients</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#footer">Contact</a></li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3 d-flex justify-content-end">
                        <div className="ts-header-btn d-none d-xl-flex">
                            <a className="ts-btn" href="#book">
                            <span className="ts-btn-wrap">
                                <span className="ts-btn-animate-y-1">BOOK A TABLE</span>
                                <span className="ts-btn-animate-y-2">BOOK A TABLE</span>
                            </span>
                            </a>
                        </div>
                        <div className="ts-offcanvas-toogle d-flex d-xl-none justify-content-end">
                            <i className="far fa-bars" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>

            {/* ==========OffcanvasArea Starts Here========== */}
            <div className="ts-offcanvas">
                <div className="ts-offcanvas-wrapper">
                <div className="ts-offcanvas-header d-flex justify-content-between align-items-center mb_40">
                    <div className="ts-offcanvas-logo">
                    <a href="index.html"><img src="assets/img/header/logo-m.png" alt="Soten Logo" /></a>
                    </div>
                    <div className="ts-offcanvas-close">
                    <button className="ts-offcanvas-close-toggle"><i className="far fa-times" /></button>
                    </div>
                </div>
                <div className="ts-offcanvas-menu mb_50">
                    <nav>
                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                    </nav>
                </div>
                <h3 className="ts-offcanvas-sm-title">Gallery</h3>
                <div className="ts-offcanvas-gallery mb_50">
                    <a className="popup-image" href="assets/img/header/showcase-thumb-01.jpg"><img src="assets/img/header/showcase-thumb-01.jpg" alt="Soten" /></a>
                    <a className="popup-image" href="assets/img/header/showcase-thumb-02.jpg"><img src="assets/img/header/showcase-thumb-02.jpg" alt="Soten" /></a>
                    <a className="popup-image" href="assets/img/header/showcase-thumb-03.jpg"><img src="assets/img/header/showcase-thumb-03.jpg" alt="Soten" /></a>
                    <a className="popup-image" href="assets/img/header/showcase-thumb-04.jpg"><img src="assets/img/header/showcase-thumb-04.jpg" alt="Soten" /></a>
                </div>
                <div className="ts-offcanvas-info mb_40">
                    <h3 className="ts-offcanvas-sm-title">Information</h3>
                    <span><a href="tel:19009009000">+1 900 - 900 - 9000</a></span>
                    <span><a href="mailto:contact@example.com">contact@example.com</a></span>
                    <span>North Tower, Toronto, Canada</span>
                </div>
                <div className="ts-offcanvas-social mb_40">
                    <h3 className="ts-offcanvas-sm-title">Follow Us</h3>
                    <a className="ts-click-close" href="#"><i className="fab fa-facebook-f" /></a>
                    <a className="ts-click-close" href="#"><i className="fab fa-twitter" /></a>
                    <a className="ts-click-close" href="#"><i className="fab fa-linkedin-in" /></a>
                    <a className="ts-click-close" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="ts-offcanvas-btn mb_40">
                    <a className="ts-btn" href="#">
                    <span className="ts-btn-wrap">
                        <span className="ts-btn-animate-y-1">BOOK A TABLE</span>
                        <span className="ts-btn-animate-y-2">BOOK A TABLE</span>
                    </span>
                    </a>
                </div>
                </div>
            </div>
            <div className="ts-offcanvas-overlay" />
            {/* ==========OffcanvasArea Ends Here========== */}      
        </>
    );
};

export default Header;