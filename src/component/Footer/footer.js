import { useEffect } from "react";
import { connect } from "react-redux";
import { getSectorsRequest } from "../../store/actions/sectors";
import "./footer.scss";
import SocialIcons from "../SocialMedia/socialmedia";
// Footer Component
const Footer = ({ sector, getSector }) => {
  // to get the sectors
  useEffect(() => {
    getSector();
  }, []);
  return (
    <section className="site-footer py-5">
      <div className="container">
        {/* footer header */}
        <div className="row site-footer__header">
          <div className="col-10 col-lg-5 mx-auto">
            <h5 className="site-footer__title">SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p className="site-footer__text">
              Get all the latest information on Events, Sales and Offers.
            </p>
          </div>
          <div className="col-10 col-lg-6 mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="site-footer__form"
            >
              <input
                type="email"
                className="site-footer__input"
                placeholder="your email..."
              />
              <input
                type="submit"
                className="btn-subscribe site-footer__btn"
                value="subscribe"
              />
            </form>
          </div>
        </div>
        {/* footer content */}
        <div className="row">
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">CONTACT INFO</h5>
            <a className="site-footer__content-text" href="/about">
              <p>About Us</p>
            </a>
            <a className="site-footer__content-text" href="/career">
              <p className="site-footer__content-text"> Careers </p>
            </a>
            <p className="site-footer__content-text">Contact Us</p>
            <p className="site-footer__content-text">Donate</p>
          </div>
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">INFORMATIONS</h5>
            <p className="site-footer__content-text">Partnership</p>
            <p className="site-footer__content-text"> News & Events</p>
            <p className="site-footer__content-text"> Publications </p>
          </div>
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">Our Sectors</h5>
            {
              // get the title of sector from data base
              sector
                ? sector.map((item) => {
                    return (
                      <a
                        href={`/sector/${item._id}`}
                        className="site-footer__content-text"
                      >
                        <p>{item.title}</p>
                      </a>
                    );
                  })
                : "Some Thing wrong in server please wait .. "
            }
          </div>
        </div>
        {/* footer footer */}
        <div className="row site-footer__footer">
          {/* copy rights */}
          <div className="col-10 col-lg-12 mx-auto">
            <SocialIcons />

            <span className="site-footer__rights">
              <span className="site-footer__rights--author">
                Sekem Development Foundataion &copy; {new Date().getFullYear()}.
                All Rights Reserved
              </span>
            </span>
          </div>
          {/* social icons */}

          <div className="col-10 col-lg-4 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  sector: state.sector.sectors.data,
});
const mapDispatchToProps = {
  getSector: getSectorsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
