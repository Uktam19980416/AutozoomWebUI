/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CarsAll.css";
import './CarsAll_resp.css';

function CarsAll( {getData} ) {
  const [cars, setCars] = useState([]);

  const baseUrl = "https://autoapi.dezinfeksiyatashkent.uz/api";
  const baseImgUrl =
    "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getCars = () => {
    fetch(`${baseUrl}/cars`)
      .then((resp) => resp.json())
      .then((info) => {
        setCars(info?.data);
        console.log(info?.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <div className="carsAll_container__">
        <div className="Cars_container_main_cars2">
          {cars &&
            cars?.map((car, index) => (
              <div className="Cars_container_main_car2" key={index}>
                <Link
                  to={`/carsparams/${car?.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    scrollTo({ top: 0 });
                  }}
                >
                  <div
                    className="Cars_container_main_car_imgContainer2"
                    key={index}
                  >
                    <img
                      src={`${baseImgUrl}/${car?.car_images[0]?.image?.src}`}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className="Cars_container_main_car_info2">
                    <h5 className="Cars_container_main_car_heading2">
                      {`${car?.brand?.title} ${car?.model?.name}`}
                    </h5>
                    <p>
                      <span className="Cars_container_main_car_price_in_aed2">
                        AED {car?.price_in_aed}
                      </span>
                      <span className="Cars_container_main_car_price_in_usd2">
                        / $ {car?.price_in_usd}
                      </span>
                    </p>
                    <p className="Cars_container_main_car_price_in_usd2">
                      per day
                    </p>
                  </div>
                </Link>
                <div className="Cars_container_main_car_info2_buttons2">
                  <Link to={`/cars`}>
                    <div className="Cars_container_main_car_info2_btn_whatsApp2">
                      <button>
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp
                      </button>
                    </div>
                  </Link>
                  <Link to={`/cars`}>
                    <div className="Cars_container_main_car_info2_btn_telegram2">
                      <button>
                        <i className="fa-brands fa-telegram"></i> Telegram
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CarsAll;
