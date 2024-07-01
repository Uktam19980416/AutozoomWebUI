/* eslint-disable no-unused-vars */
import "./Services.css";
import "./Services_resp.css";

//Images
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";

//Shevron-right
import shevronRight from "../../assets/images/shevron.svg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="Services">
      <div className="services_head">
        <Link to={"/"} className="services_head_link">
          <span>Luxury Cars for Rent in Dubai</span> <span>/ Services</span>
        </Link>
        <h1 className="services_header">SERVICES</h1>
      </div>
      <div className="services_main">
        <div className="services_sub_main_1">
          <img src={service1} className="serviceImg" alt="" />
          <div className="services_sub_main_space">
            <h4 className="services_sub_main_info">
              Sports Car Rental Dubai Style Tour in Dubai
            </h4>
            <p className="services_sub_main_text">
              Experience the thrill of a dune buggy tour in Dubai with us. We
              offer free hotel pick-up & drop-off service. Book now!
            </p>
            <div className="servicesLink">
              <Link
                to={"/services/sport_car_rent"}
                onClick={() => window.scrollTo({ top: 0 })}
                className="services_sub_main_link"
              >
                LEARN MORE{" "}
              </Link>
              <Link
                to={"/services/sport_car_rent"}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <img
                  src={shevronRight}
                  className="shevronRight services_sub_main_link"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="services_sub_main_2">
          <img src={service2} className="serviceImg" alt="" />
          <div className="services_sub_main_space">
            <h4 className="services_sub_main_info">
              Photoshoot with luxury car rental Dubai
            </h4>
            <p className="services_sub_main_text">
              Professional car photoshoot as an additional type of service at
              Auto Zoom Car Rental
            </p>
            <div className="servicesLink">
              <Link
                to={"/services/photoshoot-with-luxury-car-in-dubai"}
                onClick={() => window.scrollTo({ top: 0 })}
                className="services_sub_main_link"
              >
                LEARN MORE{" "}
              </Link>
              <Link
                to={"/services/photoshoot-with-luxury-car-in-dubai"}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <img
                  src={shevronRight}
                  className="shevronRight services_sub_main_link"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
