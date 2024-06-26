import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://www.autozoomrental.com/static/media/audi.c4adb12ac6dec846adc3.png" alt="Main 1" />
        </div>
        <div>
        <img src="https://www.autozoomrental.com/static/media/mersedez.efa884d1c86e12f4fb0f.png" alt="Main 2" />
        </div>
        <div>
        <img src="https://www.autozoomrental.com/static/media/rolsroys.500642b0161c40ebfcdc.png" alt="Main 3" />
        </div>
        <div>
        <img src="https://www.autozoomrental.com/static/media/mersedez.efa884d1c86e12f4fb0f.png" alt="Main 4" />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
