import "./Add.css";
import "./Add_resp.css";

//Image
import addImg from "../../assets/images/services_in.jpg";

//CheckedImg
import checkedImg from "../../assets/images/checkedImg.png";
import { t } from "i18next";

function Add() {
  return (
    <div className="Add">
      <div className="Add_head">
        <a href="/" className="Add_head_link">
          <span>{t("addMainLink1")}</span> <span>{t("addMainLink2")}</span>
        </a>
        <h1 className="Add_header">
          {t("addHeader")}
        </h1>
      </div>
      <div className="Add_row">
        <div className="Add_col">
          <img src={addImg} className="Add_col_img" alt="" />
          <h2 className="Add_col_type">{t("addBasic")}</h2>
          <div className="Add_col_price">
            <span className="Add_col_price_cost">1000</span>
            <span className="Add_col_price_seat">{t("oneP")}</span>
          </div>
          <div className="Add_col_text">
            <p>
              {t("addP1")}
            </p>
          </div>
          <h3 className="Add_col_head_info">{t("package")}:</h3>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn1")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn2")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn3")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn4")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn5")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn6")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn7")}</span>
          </div>
          <div className="Add_col_main_btn">
          <a href="tel:+971(55)8462124"><button>{t("packBtn")}</button></a>
          </div>
        </div>
        <div className="Add_col">
          <img src={addImg} className="Add_col_img" alt="" />
          <h2 className="Add_col_type">{t("addMedium")}</h2>
          <div className="Add_col_price">
            <span className="Add_col_price_cost">2000</span>
            <span className="Add_col_price_seat">{t("twoP")}</span>
          </div>
          <div className="Add_col_text">
            <p>
              {t("addP1")}
            </p>
          </div>
          <h3 className="Add_col_head_info">{t("package")}:</h3>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn1")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn2")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn3")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn4")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn5")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn6")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn7")}</span>
          </div>
          <div className="Add_col_main_btn">
          <a href="tel:+971(55)8462124"><button>{t("packBtn")}</button></a>
          </div>
        </div>
        <div className="Add_col">
          <img src={addImg} className="Add_col_img" alt="" />
          <h2 className="Add_col_type">{t("addPrem")}</h2>
          <div className="Add_col_price">
            <span className="Add_col_price_cost">3000</span>
            <span className="Add_col_price_seat">{t("threeP")}</span>
          </div>
          <div className="Add_col_text">
            <p>
              {t("addP1")}
            </p>
          </div>
          <h3 className="Add_col_head_info">{t("package")}:</h3>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn1")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn2")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn3")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn4")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn5")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn6")}</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn7")}</span>
          </div>
          <div className="Add_col_main_btn">
          <a href="tel:+971(55)8462124"><button>{t("packBtn")}</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
