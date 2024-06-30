/* eslint-disable no-unused-vars */
import "./Cars.css";

//Car Image
import carImg from "../../assets/images/carsImg1.png";

function Cars() {
  return (
    <div className="Cars_container_">
      <div className="Cars_sidebar">
        <h2 className="Cars_sidebar_header">Filter By</h2>
        <div className="Cars_sidebar_offers">
          <h4 className="Cars_sidebar_offers_header">Offers</h4>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox1" />
            <label htmlFor="checkBox1">
              3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE
            </label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox2" />
            <label htmlFor="checkBox2">3 DAYS RENT = 1300 AED🔥 ()</label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox3" />
            <label htmlFor="checkBox3">3 DAYS RENT = 1800 AED🔥</label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox4" />
            <label htmlFor="checkBox4">NO DEPOSIT</label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox5" />
            <label htmlFor="checkBox5">5000 AED🔥 ALL INCLUSIVE</label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox6" />
            <label htmlFor="checkBox6">
              2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE
            </label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox7" />
            <label htmlFor="checkBox7">Rent Ferrari Dubai</label>
          </div>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox8" />
            <label htmlFor="checkBox8">
              4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE
            </label>
          </div>
        </div>
        <div className="Cars_sidebar_carType">
          <h4 className="Cars_sidebar_carType_header">Car Type</h4>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType1" />
            <label htmlFor="carType1">SUV</label>
          </div>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType2" />
            <label htmlFor="carType2">Sports Cars</label>
          </div>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType3" />
            <label htmlFor="carType3">Luxury Cars</label>
          </div>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType4" />
            <label htmlFor="carType4">Convertible Cars</label>
          </div>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType5" />
            <label htmlFor="carType5">Budget Cars</label>
          </div>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType6" />
            <label htmlFor="carType6">American Brands</label>
          </div>
          <div className="Cars_sidebar_carType_info">
            <input type="checkbox" id="carType7" />
            <label htmlFor="carType7">Muscle</label>
          </div>
        </div>
        <div className="Cars_sidebar_main_brand">
          <div className="Cars_sidebar_brand_header">Brand</div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand1" />
            <label htmlFor="brand1">Ferrari</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand2" />
            <label htmlFor="brand2">Ford</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand3" />
            <label htmlFor="brand3">Rolls-Royce</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand4" />
            <label htmlFor="brand4">Porsche</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand5" />
            <label htmlFor="brand5">McLaren</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand6" />
            <label htmlFor="brand6">BMW</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand7" />
            <label htmlFor="brand7">Cadillac</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand8" />
            <label htmlFor="brand8">GMC</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand9" />
            <label htmlFor="brand9">Audi</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand10" />
            <label htmlFor="brand10">Mercedes Benz</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand11" />
            <label htmlFor="brand11">Chevrolet</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand12" />
            <label htmlFor="brand12">Lamborghini</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand13" />
            <label htmlFor="brand13">Toyota</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand14" />
            <label htmlFor="brand14">Infiniti</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand15" />
            <label htmlFor="brand15">Kia</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand16" />
            <label htmlFor="brand16">Hyundai</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand17" />
            <label htmlFor="brand17">Dodge</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand18" />
            <label htmlFor="brand18">Volswagen</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand19" />
            <label htmlFor="brand19">Jeep</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand20" />
            <label htmlFor="brand20">Nissan</label>
          </div>
          <div className="Cars_sidebar_brand_info">
            <input type="checkbox" id="brand21" />
            <label htmlFor="brand21">Mitsubishi</label>
          </div>
        </div>
        <div className="Cars_sidebar_modal">
          <div className="Cars_sidebar_model_info">Model</div>
          <div className="Cars_sidebar_model_select">
            <select>
              <option value="E350">E350</option>
            </select>
          </div>
        </div>
        <div className="Cars_sidebar_buttons">
          <button className="Cars_sidebar_buttons_reset">Reset</button>
          <button className="Cars_sidebar_buttons_apply">Apply Filter</button>
        </div>
      </div>
      <div className="Cars_container_main">
        <div className="Cars_container_main_header">
          <a href="/" className="Cars_container_main_link">
            <span>Luxury Cars for Rent in Dubai </span>{" "}
            <span>/ Hire the latest supercar</span>
          </a>
        </div>
        <div className="Cars_container_main_cars">
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="Cars_container_main_car">
            <div className="Cars_container_main_car_imgContainer">
              <img src={carImg} alt="" width={200} height={200} />
            </div>
            <div className="Cars_container_main_car_info">
              <h5 className="Cars_container_main_car_heading">
                Dodge Challenger
              </h5>
              <p>
                <span className="Cars_container_main_car_price_in_aed">
                  AED 450
                </span>{" "}
                <span className="Cars_container_main_car_price_in_usd">
                  / $ 200
                </span>
              </p>
              <p className="Cars_container_main_car_price_in_usd">per day</p>
            </div>
            <div className="Cars_container_main_car_info_buttons">
              <div className="Cars_container_main_car_info_btn_whatsApp">
                <button>
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </button>
              </div>
              <div className="Cars_container_main_car_info_btn_telegram">
                <button>
                  <i className="fa-brands fa-telegram"></i> Telegram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
