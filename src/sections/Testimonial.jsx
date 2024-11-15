

const Testimonial = () => {
    return (
        <>
          <section id="testimonial" className="ts-testimonial-area pt_120 pb_120">
            <img className="ts-testimonial-bg-img1" src="assets/img/testimonial/testimonial-bg-img1.png" alt="Restaurant" />
            <img className="ts-testimonial-bg-img2" src="assets/img/testimonial/testimonial-bg-img2.png" alt="Restaurant" />
            <div className="container">
              <div className="row">
                <div className="col-xl-8">
                  <div className="ts-section-title-wrapper mb_60">
                    <span className="ts-section-subtitle">Customers Testimonial
                    </span>
                    <h2 className="ts-section-title">What Some of my Customers Say</h2>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="ts-testimonial-slider-arrow">
                    <div className="ts-swiper-testimonial-button-prev">
                      <i className="fas fa-chevron-left" />
                    </div>
                    <div className="ts-swiper-testimonial-button-next">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="swiper tsTestimonialSwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row g-0 flex-row-reverse">
                      <div className="col-xl-7">
                        <div className="ts-testimonial-thumb">
                          <img src="assets/img/testimonial/testimonial-bg-video1.jpg" alt="Restaurant" />
                          <div className="ts-testimonial-play-btn">
                            <a className="popup-video" href="https://www.youtube.com/watch?v=TfU0qjuZkJ4">
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="ts-testimonial-content">
                          <img className="ts-testimonial-quote" src="assets/img/testimonial/quote.png" alt="Restaurant" />
                          <span>
                            You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was
                            cooked
                            perfectly,
                            juicy &amp; soft (usually mandi
                            chicken is a bit dry). I would defiantly recommend it.
                          </span>
                          <div className="ts-testimonial-info d-flex align-items-center justify-content-between mt_184">
                            <div className="ts-testimonial-name-desig">
                              <h5>Khalid Al Dawsry</h5>
                              <span>Jeddah, Saudi</span>
                            </div>
                            <div className="ts-testimonial-pic">
                              <img src="assets/img/testimonial/testimonial-pic1.png" alt="Restaurant" />
                            </div>
                          </div>
                          <img className="ts-testimonial-shape" src="assets/img/testimonial/testimonial-shape.svg" alt="Restaurant" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-0 flex-row-reverse">
                      <div className="col-xl-7">
                        <div className="ts-testimonial-thumb">
                          <img src="assets/img/testimonial/testimonial-bg-video2.jpg" alt="Restaurant" />
                          <div className="ts-testimonial-play-btn">
                            <a className="popup-video" href="https://www.youtube.com/watch?v=TfU0qjuZkJ4">
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="ts-testimonial-content">
                          <img className="ts-testimonial-quote" src="assets/img/testimonial/quote.png" alt="Restaurant" />
                          <span>
                            I would defiantly recommend it. You can&apos;t go wrong with Chicken Mandi, I had
                            it twice. The chicken was
                            cooked
                            perfectly,
                            juicy &amp; soft (usually mandi
                            chicken is a bit dry).
                          </span>
                          <div className="ts-testimonial-info d-flex align-items-center justify-content-between mt_184">
                            <div className="ts-testimonial-name-desig">
                              <h5>Malida Ml Pawsry</h5>
                              <span>Jeddah, Saudi</span>
                            </div>
                            <div className="ts-testimonial-pic">
                              <img src="assets/img/testimonial/testimonial-pic2.png" alt="Restaurant" />
                            </div>
                          </div>
                          <img className="ts-testimonial-shape" src="assets/img/testimonial/testimonial-shape.svg" alt="Restaurant" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-0 flex-row-reverse">
                      <div className="col-xl-7">
                        <div className="ts-testimonial-thumb">
                          <img src="assets/img/testimonial/testimonial-bg-video3.jpg" alt="Restaurant" />
                          <div className="ts-testimonial-play-btn">
                            <a className="popup-video" href="https://www.youtube.com/watch?v=TfU0qjuZkJ4">
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="ts-testimonial-content">
                          <img className="ts-testimonial-quote" src="assets/img/testimonial/quote.png" alt="Restaurant" />
                          <span>
                            The chicken was
                            cooked
                            perfectly,
                            juicy &amp; soft (usually mandi
                            chicken is a bit dry). You can&apos;t go wrong with Chicken Mandi, I had it
                            twice. I would defiantly recommend it.
                          </span>
                          <div className="ts-testimonial-info d-flex align-items-center justify-content-between mt_184">
                            <div className="ts-testimonial-name-desig">
                              <h5>Whalid Hl Nawsry</h5>
                              <span>Jeddah, Saudi</span>
                            </div>
                            <div className="ts-testimonial-pic">
                              <img src="assets/img/testimonial/testimonial-pic3.png" alt="Restaurant" />
                            </div>
                          </div>
                          <img className="ts-testimonial-shape" src="assets/img/testimonial/testimonial-shape.svg" alt="Restaurant" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};

export default Testimonial;