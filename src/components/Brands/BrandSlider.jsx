import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import styles from "./BrandSlider.module.css";

function MultipleRows() {
  const base_URL = "https://autoapi.dezinfeksiyatashkent.uz/api";
  const base_URL2 =
    "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const [datas, setDatas] = useState([]);

  const getFetch = async (url) => {
    const response = await fetch(url, {
      method: "GET",
    });
    return await response.json();
  };

  useEffect(() => {
    getFetch(`${base_URL}/brands`).then((data) => {
      setDatas(data?.data);
    });
  }, []);

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   rows: 2,
  //   slidesPerRow: 1,
  // };

  return (
    <>
      <h2>Brands</h2>
      <div className={styles.slider__container}>
        {/* <Slider {...settings}>
      </Slider> */}
        {datas.map((item) => (
          <div key={item.id} className={styles.brand__images}>
            <img
              src={`${base_URL2}${item.image_src}`}
              alt={item.title}
              className={styles.brand__img}
            />
            <p className={styles.brand__text}>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MultipleRows;
