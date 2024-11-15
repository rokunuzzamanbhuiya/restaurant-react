const Hero = () => {
  return (
    <>
      <section className="ts-hero-area pt_238 pb_238">
        <div className="container">
          <div className="ts-hero-inner">
            <div className="row g-5">
              <div className="col-xl-8">
                <div className="ts-hero-content mt_100">
                  <h1 className="ts-hero-title">
                    Taste the authentic Saudi cuisine
                  </h1>
                  <p className="ts-hero-paragraph">
                    Among the best Saudi chefs in the world, serving <br /> you
                    something beyond flavor.
                  </p>
                  <div className="ts-hero-btn mt_50">
                    <a className="ts-btn ts-btn-2" href="#">
                      <span className="ts-btn-wrap">
                        <span className="ts-btn-animate-y-1">EXPLORE MENU</span>
                        <span className="ts-btn-animate-y-2">EXPLORE MENU</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="ts-hero-thumb d-xl-none">
                  <img src="assets/img/hero/hero-img.jpg" alt="Restaurant" />
                </div>
              </div>
              <div className="ts-hero-img d-none d-xl-block">
                <img src="assets/img/hero/hero-img.jpg" alt="Restaurant" />
              </div>
            </div>
            <img
              className="ts-hero-shape"
              src="assets/img/hero/hero-shape.png"
              alt="Restaurant"
            />
            <h3 className="ts-hero-text">
              TODAY <br /> OFFER
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
