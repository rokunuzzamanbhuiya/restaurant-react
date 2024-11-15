// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore from "swiper";
import { useRef } from "react";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Food = () => {
  SwiperCore.use([Navigation]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section id="food" className="ts-food-area pt_120 pb_120">
        <img
          className="ts-food-bg-img"
          src="assets/img/food/food-bg-img.png"
          alt="Restaurant"
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="ts-section-title-wrapper mb_60">
                <span className="ts-section-subtitle">
                  Crispy, Every Bite Taste
                </span>
                <h2 className="ts-section-title">POPULAR FOOD ITEMS</h2>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ts-food-slider-arrow">
                <div className="ts-swiper-food-button-prev" ref={prevRef}>
                  <i className="fas fa-chevron-left" />
                </div>
                <div className="ts-swiper-food-button-next" ref={nextRef}>
                  <i className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              slidesPerView={4}
              spaceBetween={30}
              navigation={false}
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="tsfood text-center">
                  <div className="tsfood__thumb mb_20">
                    <img
                      src="assets/img/food/food-img-1.png"
                      alt="Restaurant"
                    />
                  </div>
                  <div className="tsfood__shape"></div>
                  <div className="tsfood__content mt_30">
                    <h4>
                      <a href="#">vegetables burger</a>
                    </h4>
                    <span>Barbecue Italian cuisine pizza</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="tsfood text-center">
                  <div className="tsfood__thumb mb_30">
                    <img
                      src="assets/img/food/food-img-2.png"
                      alt="Restaurant"
                    />
                  </div>
                  <div className="tsfood__shape"></div>
                  <div className="tsfood__content mt_20">
                    <h4>
                      <a href="#">Spacial Pizza</a>
                    </h4>
                    <span>Barbecue Italian cuisine pizza</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="tsfood text-center">
                  <div className="tsfood__thumb mb_30">
                    <img
                      src="assets/img/food/food-img-3.png"
                      alt="Restaurant"
                    />
                  </div>
                  <div className="tsfood__shape"></div>
                  <div className="tsfood__content mt_20">
                    <h4>
                      <a href="#">Spacial French fries</a>
                    </h4>
                    <span>Barbecue Italian cuisine</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="tsfood text-center">
                  <div className="tsfood__thumb mb_30">
                    <img
                      src="assets/img/food/food-img-4.png"
                      alt="Restaurant"
                    />
                  </div>
                  <div className="tsfood__shape"></div>
                  <div className="tsfood__content mt_20">
                    <h4>
                      <a href="#">Cuisine Chicken</a>
                    </h4>
                    <span>Japanese Cuisine Chicken</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="tsfood text-center">
                  <div className="tsfood__thumb mb_30">
                    <img
                      src="assets/img/food/food-img-2.png"
                      alt="Restaurant"
                    />
                  </div>
                  <div className="tsfood__shape"></div>
                  <div className="tsfood__content mt_20">
                    <h4>
                      <a href="#">Spacial Pizza</a>
                    </h4>
                    <span>Barbecue Italian cuisine pizza</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="tsfood text-center">
                  <div className="tsfood__thumb mb_30">
                    <img
                      src="assets/img/food/food-img-3.png"
                      alt="Restaurant"
                    />
                  </div>
                  <div className="tsfood__shape"></div>
                  <div className="tsfood__content mt_20">
                    <h4>
                      <a href="#">Spacial French fries</a>
                    </h4>
                    <span>Barbecue Italian cuisine</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Food;
