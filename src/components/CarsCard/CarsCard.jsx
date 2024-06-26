import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './CarsCard.css';

const CarsCard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const urlImg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getCars = () => {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/cars')
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data[0]?.car_images[0]?.image?.src);
        setCars(data?.data || []);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  };

  // Group cars by category
  const groupedCars = cars.reduce((acc, car) => {
    const category = car?.category?.name_en;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(car);
    return acc;
  }, {});

  return (
    <div className='Add'>
      <div className="container">
        {Object.keys(groupedCars).map((category, index) => (
          <div key={index}>
            <div className='add-top'>
              <h1 className='add-title'>{category}</h1>
              <a href="#" className='add-sublink'>SEE ALL <i className="left-icon fa-solid fa-chevron-right"></i></a>
            </div>
            <Swiper
              className="cards"
              slidesPerView={3}  // Har safar 3 ta slayd ko'rsatiladi
              spaceBetween={30} // Slaydlar orasidagi bo'shliq
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {groupedCars[category].map((car, carIndex) => (
                <SwiperSlide key={carIndex}>
                  <div className='card'>
                    {car?.car_images[0]?.image?.src && (
                      <img className='card-image' src={`${urlImg}${car?.car_images[0]?.image?.src}`} alt={car?.name} />
                    )}
                    <h2>{car?.brand?.title}</h2>
                    <div className='hr' />
                    <div>
                      <span className='model_name'>{car?.model?.name}</span> 
                      <span className='model_name'>{car?.price_in_aed}</span> 
                      {car?.price_in_usd && <span className='car-price'>{` / $ ${car?.price_in_usd}`}</span>}
                    </div>
                    <p className='car-title'>prev day</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsCard;
