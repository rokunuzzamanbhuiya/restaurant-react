const Book = () => {
  return (
    <>
      <section id="book" className="ts-book-area pt_120 pb_120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="ts-section-title-wrapper mb_16">
                <span className="ts-section-subtitle">Book Now</span>
                <h2 className="ts-section-title ts-section-title-white">
                  Book Your Table
                </h2>
              </div>
              <p className="ts-book-paragraph mb_40">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <div className="ts-book-form">
                <form id="contact-form" action="#" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        className="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        className="date"
                        name="date"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        placeholder="Total People"
                        className="number"
                        name="number"
                        required
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        rows={2}
                        placeholder="Message"
                        className="message"
                        name="message"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="ts-btn">
                        <span className="ts-btn-wrap">
                          <span className="ts-btn-animate-y-1">BOOK NOW</span>
                          <span className="ts-btn-animate-y-2">BOOK NOW</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="ajax-response mt_15" />
                </form>
              </div>
            </div>
            <div className="col-xl-6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
