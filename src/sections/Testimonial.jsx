// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";

import SwiperCore from "swiper";
import { useRef } from "react";

import VideoPopup from "../components/VideoPopup";

const Testimonial = () => {
  SwiperCore.use([Navigation]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section id="testimonial" className="ts-testimonial-area pt_120 pb_120">
        <img
          className="ts-testimonial-bg-img1"
          src="assets/img/testimonial/testimonial-bg-img1.png"
          alt="Restaurant"
        />
        <img
          className="ts-testimonial-bg-img2"
          src="assets/img/testimonial/testimonial-bg-img2.png"
          alt="Restaurant"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="ts-section-title-wrapper mb_60">
                <span className="ts-section-subtitle">
                  Customers Testimonial
                </span>
                <h2 className="ts-section-title">
                  What Some of my Customers Say
                </h2>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="ts-testimonial-slider-arrow">
                <div
                  className="ts-swiper-testimonial-button-prev"
                  ref={prevRef}
                >
                  <i className="fas fa-chevron-left" />
                </div>
                <div
                  className="ts-swiper-testimonial-button-next"
                  ref={nextRef}
                >
                  <i className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Autoplay, EffectCreative]}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            className="mySwiper6"
          >
            <SwiperSlide>
              <div className="row g-0 flex-row-reverse">
                <div className="col-xl-7">
                  <div className="ts-testimonial-thumb">
                    <img
                      src="assets/img/testimonial/testimonial-bg-video1.jpg"
                      alt="Restaurant"
                    />
                    <VideoPopup />
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="ts-testimonial-content">
                    <img
                      className="ts-testimonial-quote"
                      src="assets/img/testimonial/quote.png"
                      alt="Restaurant"
                    />
                    <span>
                      You can&apos;t go wrong with Chicken Mandi, I had it
                      twice. The chicken was cooked perfectly, juicy &amp; soft
                      (usually mandi chicken is a bit dry). I would defiantly
                      recommend it.
                    </span>
                    <div className="ts-testimonial-info d-flex align-items-center justify-content-between mt_184">
                      <div className="ts-testimonial-name-desig">
                        <h5>Khalid Al Dawsry</h5>
                        <span>Jeddah, Saudi</span>
                      </div>
                      <div className="ts-testimonial-pic">
                        <img
                          src="assets/img/testimonial/testimonial-pic1.png"
                          alt="Restaurant"
                        />
                      </div>
                    </div>
                    <img
                      className="ts-testimonial-shape"
                      src="assets/img/testimonial/testimonial-shape.svg"
                      alt="Restaurant"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row g-0 flex-row-reverse">
                <div className="col-xl-7">
                  <div className="ts-testimonial-thumb">
                    <img
                      src="assets/img/testimonial/testimonial-bg-video2.jpg"
                      alt="Restaurant"
                    />
                    <VideoPopup />
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="ts-testimonial-content">
                    <img
                      className="ts-testimonial-quote"
                      src="assets/img/testimonial/quote.png"
                      alt="Restaurant"
                    />
                    <span>
                      I would defiantly recommend it. You can&apos;t go wrong
                      with Chicken Mandi, I had it twice. The chicken was cooked
                      perfectly, juicy &amp; soft (usually mandi chicken is a
                      bit dry).
                    </span>
                    <div className="ts-testimonial-info d-flex align-items-center justify-content-between mt_184">
                      <div className="ts-testimonial-name-desig">
                        <h5>Malida Ml Pawsry</h5>
                        <span>Jeddah, Saudi</span>
                      </div>
                      <div className="ts-testimonial-pic">
                        <img
                          src="assets/img/testimonial/testimonial-pic2.png"
                          alt="Restaurant"
                        />
                      </div>
                    </div>
                    <img
                      className="ts-testimonial-shape"
                      src="assets/img/testimonial/testimonial-shape.svg"
                      alt="Restaurant"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row g-0 flex-row-reverse">
                <div className="col-xl-7">
                  <div className="ts-testimonial-thumb">
                    <img
                      src="assets/img/testimonial/testimonial-bg-video3.jpg"
                      alt="Restaurant"
                    />
                    <VideoPopup />
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="ts-testimonial-content">
                    <img
                      className="ts-testimonial-quote"
                      src="assets/img/testimonial/quote.png"
                      alt="Restaurant"
                    />
                    <span>
                      The chicken was cooked perfectly, juicy &amp; soft
                      (usually mandi chicken is a bit dry). You can&apos;t go
                      wrong with Chicken Mandi, I had it twice. I would
                      defiantly recommend it.
                    </span>
                    <div className="ts-testimonial-info d-flex align-items-center justify-content-between mt_184">
                      <div className="ts-testimonial-name-desig">
                        <h5>Whalid Hl Nawsry</h5>
                        <span>Jeddah, Saudi</span>
                      </div>
                      <div className="ts-testimonial-pic">
                        <img
                          src="assets/img/testimonial/testimonial-pic3.png"
                          alt="Restaurant"
                        />
                      </div>
                    </div>
                    <img
                      className="ts-testimonial-shape"
                      src="assets/img/testimonial/testimonial-shape.svg"
                      alt="Restaurant"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
