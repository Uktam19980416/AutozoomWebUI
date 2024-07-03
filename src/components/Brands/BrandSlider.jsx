import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './Brands.css';

const Brands = () => {
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api';
  const base_URL2 = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/';
  const [datas, setDatas] = useState([]);

  const getFetch = async (url) => {
    const response = await fetch(url, { method: 'GET' });
    return await response.json();
  };

  useEffect(() => {
    getFetch(`${base_URL}/brands`).then((data) => {
      setDatas(data?.data);
    });
  }, []);

  return (
    <div className="BrandWrapper">
      <div className="container">
        <h2 className="brands-title">BRANDS</h2>
        <div className="Brands-Swipper-flex">
          <Swiper
            slidesPerView={4}
            grid={{ rows: 2, fill: 'row' }} // fill: 'row' qo'shildi
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                grid: { rows: 1, fill: 'row' }, // fill: 'row' qo'shildi
              },
              500: {
                slidesPerView: 2,
                grid: { rows: 2, fill: 'row' }, // fill: 'row' qo'shildi
              },
              700: {
                slidesPerView: 3,
                grid: { rows: 2, fill: 'row' }, // fill: 'row' qo'shildi
              },
              900: {
                slidesPerView: 3,
                grid: { rows: 2, fill: 'row' }, // fill: 'row' qo'shildi
              },
              1200: {
                slidesPerView: 4,
                grid: { rows: 2, fill: 'row' }, // fill: 'row' qo'shildi
              },
            }}
            modules={[Grid, Pagination]}
            className="mySwipers"
          >
            {datas.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slidebrand">
                <Link to={`/cars/${item.id}`} className="brand__images">
                  <img
                    src={`${base_URL2}${item.image_src}`}
                    alt={item.title}
                    className="brand__img"
                  />
                  <p className="brand__text">{item.title}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brands;
