

const Food = () => {
    return (
        <>
            <section id="food" className="ts-food-area pt_120 pb_120">
            <img className="ts-food-bg-img" src="assets/img/food/food-bg-img.png" alt="Restaurant" />
            <div className="container">
                <div className="row">
                <div className="col-xl-6">
                    <div className="ts-section-title-wrapper mb_60">
                    <span className="ts-section-subtitle">Crispy, Every Bite
                        Taste
                    </span>
                    <h2 className="ts-section-title">POPULAR FOOD ITEMS</h2>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="ts-food-slider-arrow">
                    <div className="ts-swiper-food-button-prev">
                        <i className="fas fa-chevron-left" />
                    </div>
                    <div className="ts-swiper-food-button-next">
                        <i className="fas fa-chevron-right" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
               
                        
                        <div className="col-xl-3 col-lg-6 col-md-12">
                        <div className="tsfood text-center">
                        <div className="tsfood__thumb mb_20">
                            <img src="assets/img/food/food-img-1.png" alt="Restaurant" />
                        </div>
                        <div className="tsfood__shape">
                        </div>
                        <div className="tsfood__content mt_30">
                            <h4><a href="#">vegetables burger</a></h4>
                            <span>Barbecue Italian cuisine pizza</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        <div className="tsfood text-center">
                        <div className="tsfood__thumb mb_30">
                            <img src="assets/img/food/food-img-2.png" alt="Restaurant" />
                        </div>
                        <div className="tsfood__shape">
                        </div>
                        <div className="tsfood__content mt_20">
                            <h4><a href="#">Spacial Pizza</a></h4>
                            <span>Barbecue Italian cuisine pizza</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        <div className="tsfood text-center">
                        <div className="tsfood__thumb mb_30">
                            <img src="assets/img/food/food-img-3.png" alt="Restaurant" />
                        </div>
                        <div className="tsfood__shape">
                        </div>
                        <div className="tsfood__content mt_20">
                            <h4><a href="#">Spacial French fries</a></h4>
                            <span>Barbecue Italian cuisine</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-12">
                        <div className="tsfood text-center">
                        <div className="tsfood__thumb mb_30">
                            <img src="assets/img/food/food-img-4.png" alt="Restaurant" />
                        </div>
                        <div className="tsfood__shape">
                        </div>
                        <div className="tsfood__content mt_20">
                            <h4><a href="#">Cuisine Chicken</a></h4>
                            <span>Japanese Cuisine Chicken</span>
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </section>
        </>
    );
};

export default Food;