import "./Add2.css";
import "./Add2_resp.css";

//Image
import addImg from "../../assets/images/services_in.jpg";

//CheckedImg
import checkedImg from "../../assets/images/checkedImg.png";
import { t } from "i18next";

function Add2() {
  return (
    <div className="Add2">
      <div className="Add2_head">
        <a href="/" className="Add2_head_link">
          <span>{t("addMainLink1")}</span> <span>{t("addMainLink2")}</span>
        </a>
        <h1 className="Add2_header">
         {t("addHeader")}
        </h1>
      </div>
      <div className="Add2_row">
        <div className="Add2_col">
          <img src={addImg} className="Add2_col_img" alt="" />
          <h2 className="Add2_col_type">{t("addBasic")}</h2>
          <div className="Add2_col_price">
            <span className="Add2_col_price_cost">1000</span>
            <span className="Add2_col_price_seat">{t("oneP")}</span>
          </div>
          <div className="Add2_col_text">
            <p>
             {t("addP1")}
            </p>
          </div>
          <h3 className="Add2_col_head_info">{t("package")}:</h3>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn1")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn2")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn3")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn4")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn5")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn6")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn7")}</span>
          </div>
          <div className="Add2_col_main_btn">
          <a href="tel:+971(55)8462124"><button>{t("packBtn")}</button></a>
          </div>
        </div>
        <div className="Add2_col">
          <img src={addImg} className="Add2_col_img" alt="" />
          <h2 className="Add2_col_type">{t("addMedium")}</h2>
          <div className="Add2_col_price">
            <span className="Add2_col_price_cost">2000</span>
            <span className="Add2_col_price_seat">{t("twoP")}</span>
          </div>
          <div className="Add2_col_text">
            <p>
             {t("addP1")}
            </p>
          </div>
          <h3 className="Add2_col_head_info">{t("package")}:</h3>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn1")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn2")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn3")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn4")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn5")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn6")}</span>
          </div>
          <div className="Add2_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>{t("packIn7")}</span>
          </div>
          <div className="Add2_col_main_btn">
            <a href="tel:+971(55)8462124"><button>{t("packBtn")}</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add2;
