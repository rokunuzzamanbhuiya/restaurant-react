const About = () => {
  return (
    <>
      <section id="about" className="ts-about-area pt_120 pb_120">
        <img
          className="ts-about-img-2"
          src="assets/img/about/about-img-2.png"
          alt="Restaurant"
        />
        <div className="ts-about-top">
          <div className="container">
            <div className="row g-0 g-xl-5">
              <div className="col-xl-6">
                <div className="ts-about-thumb">
                  <img src="assets/img/about/about-img.jpg" alt="Restaurant" />
                  <div className="ts-about-experience d-flex align-items-center">
                    <div className="ts-about-experience-left mr_10">
                      <img
                        src="assets/img/about/about-circle.png"
                        alt="Restaurant"
                      />
                      <span>50+</span>
                    </div>
                    <div className="ts-about-experience-right">
                      <span>
                        Market <br />
                        Experiences
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="ts-about-tab">
                  <div className="ts-about-tab-btn">
                    <ul
                      className="nav nav-pills mb_25"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          About
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Experience
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Contact
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="ts-about-tab-content">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex={0}
                      >
                        <h2 className="ts-about-title mb_15">
                          Exceptional culinary experience and delicious food
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ornare non sed est cursus. Vel hac convallis
                          ipsum, facilisi odio pellentesque bibendum viverra
                          tempus. Lorem ipsum dolor sit amet consectetur
                          adipiscing elit do eiusmod tempor incididunt ut labore
                          et dolore magna minim veniam nostrud exercitation.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex={0}
                      >
                        <h2 className="ts-about-title mb_15">
                          Exceptional culinary taste and delicious food
                        </h2>
                        <p>
                          Vel hac convallis ipsum, facilisi odio pellentesque
                          bibendum viverra tempus. Lorem ipsum dolor sit amet
                          consectetur adipiscing elit do eiusmod tempor
                          incididunt ut labore et dolore magna minim veniam
                          nostrud exercitation. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Ornare non sed est
                          cursus.
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex={0}
                      >
                        <h2 className="ts-about-title mb_15">
                          Exceptional culinary nice and delicious food corner
                        </h2>
                        <p>
                          Ornare non sed est cursus. Vel hac convallis ipsum,
                          facilisi odio pellentesque bibendum viverra tempus.
                          Lorem ipsum dolor sit amet consectetur adipiscing elit
                          do eiusmod tempor incididunt ut labore et dolore magna
                          minim veniam nostrud exercitation. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ts-about-btn-call mt_32">
                  <div className="ts-about-btn mr_32">
                    <a className="ts-btn ts-btn-2" href="#">
                      <span className="ts-btn-wrap">
                        <span className="ts-btn-animate-y-1">ABOUT MORE</span>
                        <span className="ts-btn-animate-y-2">ABOUT MORE</span>
                      </span>
                    </a>
                  </div>
                  <div className="ts-about-call">
                    <img src="assets/img/about/call-alt.svg" alt="Restaurant" />
                    <span>
                      <a href="tel:3426739485">+88 3426 739 485</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ts-about-bottom mt_75">
          <div className="container">
            <div className="row g-md-5 g-4">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="tsabout d-flex align-items-center">
                  <div className="tsabout__icon">
                    <img src="assets/img/about/package.svg" alt="Restaurant" />
                  </div>
                  <div className="tsabout__content">
                    <h3>fast delivery</h3>
                    <span>Within 30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="tsabout d-flex align-items-center">
                  <div className="tsabout__icon">
                    <img src="assets/img/about/medal.svg" alt="Restaurant" />
                  </div>
                  <div className="tsabout__content">
                    <h3>absolute dining</h3>
                    <span>Best buffet restaurant</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="tsabout d-flex align-items-center">
                  <div className="tsabout__icon">
                    <img src="assets/img/about/bag.svg" alt="Restaurant" />
                  </div>
                  <div className="tsabout__content">
                    <h3>pickup delivery</h3>
                    <span>Grab your food order</span>
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

export default About;
