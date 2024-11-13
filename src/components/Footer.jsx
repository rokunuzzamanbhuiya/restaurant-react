

const Footer = () => {
    return (
        <>
            <footer id="footer" className="ts-footer-bg ts-bg-img-cover pt_120 pb_100" data-background="assets/img/footer/footer.jpg">
            <div className="ts-section-title-wrapper text-center mb_40">
                <h2 className="ts-section-title ts-section-title-white">We ready to have you the best dining experiences</h2>
            </div>
            <div className="ts-footer-top">
                <div className="container">
                <div className="row g-5">
                    <div className="col-xl-3 col-lg-6 col-md-12">
                    <div className="tsfooter text-center">
                        <div className="tsfooter__icon mb_22">
                        <img src="assets/img/footer/clock.svg" alt="Restaurant" />
                        </div>
                        <div className="tsfooter__content">
                        <h4 className="mb_15">Opening hours</h4>
                        <span>Monday - Sunday <br />
                            9:00 AM to 11:30 PM</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                    <div className="tsfooter text-center">
                        <div className="tsfooter__icon mb_22">
                        <img src="assets/img/footer/call-alt.svg" alt="Restaurant" />
                        </div>
                        <div className="tsfooter__content">
                        <h4 className="mb_15">LET&apos;S TALK</h4>
                        <span>Phone: 1-800-222-4545 <br />
                            Fax: 1-800-222-4545</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                    <div className="tsfooter text-center">
                        <div className="tsfooter__icon mb_22">
                        <img src="assets/img/footer/mail.svg" alt="Restaurant" />
                        </div>
                        <div className="tsfooter__content">
                        <h4 className="mb_15">BOOK A TABLE</h4>
                        <span>Email: demo@website.com <br />
                            Support: support@website.com</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                    <div className="tsfooter text-center">
                        <div className="tsfooter__icon mb_22">
                        <img src="assets/img/footer/map-pin.svg" alt="Restaurant" />
                        </div>
                        <div className="tsfooter__content">
                        <h4 className="mb_15">Our Address</h4>
                        <span>123 Stree New York City, United <br /> States Of America.</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="ts-footer-bottom text-center mt_134">
                <div className="ts-footer-social mb_35">
                <ul>
                    <li><a href="#"><img src="assets/img/footer/facebook.png" alt="Restaurant" /></a></li>
                    <li><a href="#"><img src="assets/img/footer/x.png" alt="Restaurant" /></a></li>
                    <li><a href="#"><img src="assets/img/footer/instagram.png" alt="Restaurant" /></a></li>
                    <li><a href="#"><img src="assets/img/footer/linkedin.png" alt="Restaurant" /></a></li>
                </ul>
                </div>
                <div className="ts-footer-text">
                <p>© 2024 <a href="#">Niomax</a> All Rights Reserved</p>
                </div>
            </div>
            </footer>
        </>
    );
};

export default Footer;