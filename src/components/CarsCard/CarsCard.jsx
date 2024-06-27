/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './CarsCard.css';
import { Link } from 'react-router-dom';

const CarsCard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const urlImg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getCities = () => {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/cars')
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        setCars(data?.data || []);
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
      });
  };

  return (
    <div className='Add'>
      <div className="container">
        <div className='Add-one'>
          <div className='add-top'>
            <h1 className='add-title'>BUDGET CARS RENTAL DUBAI</h1>
            <Link to={`/category/${cars[0]?.category_id}`} className='add-sublink'>
              SEE ALL <i className="left-icon fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
        <Swiper
          className="cards"
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
        >
          {cars?.map((car, index) => (
            <SwiperSlide key={index}>
              <div className='card'>
                {car?.car_images && car.car_images.length > 0 ? (
                  <img className='card-image' src={`${urlImg}${car?.car_images[0]?.image?.src}`} alt={car?.name} />
                ) : (
                  <p>No image available</p>
                )}
                <h2>{car?.brand?.title}</h2>
                <div className='hr' />
                <div>
                  <span className='model_name'>{car?.model?.name}</span>  <span className='model_name'>{car?.price_in_aed}</span>   {car?.price_in_usd && <span className='car-price'>{` / $ ${car?.price_in_usd}`}</span>}
                </div>
                <p className='car-title'>prev day</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='Add-two'>
          <div className='add-top'>
            <h1 className='add-title'>SPORTS CARS RENTAL DUBAI</h1>
            <a href="" className='add-sublink'>SEE ALL <i className="left-icon fa-solid fa-chevron-right"></i></a>

          </div>
          {cars.length > 0 && (
            <div key={cars[0]?.id}>
              <div className='card'>
                {cars[0]?.car_images && cars[0]?.car_images.length > 0 ? (
                  <img className='card-image' src={`${urlImg}${cars[0]?.car_images[0]?.image?.src}`} alt={cars[0]?.name} />
                ) : (
                  <p>No image available</p>
                )}
                <h2>{cars[0]?.brand?.title}</h2>
                <div className='hr' />
                <div>
                  <span className='model_name'>{cars[0]?.model?.name}</span>  <span className='model_name'>{cars[0]?.price_in_aed}</span>   {cars[0]?.price_in_usd && <span className='car-price'>{` / $ ${cars[0]?.price_in_usd}`}</span>}
                </div>
                <p className='car-title'>prev day</p>
              </div>
            </div>
          )}
        </div>
        <div className='Add-two'>
          <div className='add-top'>
            <h1 className='add-title'>LUXURY CARS RENTAL DUBAI</h1>
            <Link to={`/category/${cars[2]?.category_id}`} className='add-sublink'>
              SEE ALL <i className="left-icon fa-solid fa-chevron-right"></i>
            </Link>
          </div>
          {cars.length > 1 && (
            <div key={cars[1]?.id}>
              <div className='card'>
                {cars[1]?.car_images && cars[1]?.car_images.length > 0 ? (
                  <img className='card-image' src={`${urlImg}${cars[1]?.car_images[0]?.image?.src}`} alt={cars[1]?.name} />
                ) : (
                  <p>No image available</p>
                )}
                <h2>{cars[1]?.brand?.title}</h2>
                <div className='hr' />
                <div>
                  <span className='model_name'>{cars[1]?.model?.name}</span>  <span className='model_name'>{cars[1]?.price_in_aed}</span>   {cars[1]?.price_in_usd && <span className='car-price'>{` / $ ${cars[1]?.price_in_usd}`}</span>}
                </div>
                <p className='car-title'>prev day</p>
              </div>
            </div>
          )}
        </div>
        <div className='Add-two'>
          <div className='add-top'>
            <h1 className='add-title'>CONVERTIBLE CARS RENTAL DUBAI</h1>
            <Link to={`/category/${cars[3]?.category_id}`} className='add-sublink'>
              SEE ALL <i className="left-icon fa-solid fa-chevron-right"></i>
            </Link>
          </div>
          {cars.length > 2 && (
            <div key={cars[2]?.id}>
              <div className='card'>
                {cars[2]?.car_images && cars[2]?.car_images.length > 0 ? (
                  <>
                    {console.log(`Image URL: ${urlImg}${cars[2]?.car_images[0]?.image?.src}`)}
                    <img className='card-image' src={`${urlImg}${cars[2]?.car_images[0]?.image?.src}`} alt={cars[2]?.name} />
                  </>
                ) : (
                  <p>No image available</p>
                )}
                <h2>{cars[2]?.brand?.title}</h2>
                <div className='hr' />
                <div>
                  <span className='model_name'>{cars[2]?.model?.name}</span>
                  <span className='model_name'>{cars[2]?.price_in_aed}</span>
                  {cars[2]?.price_in_usd && <span className='car-price'>{` / $ ${cars[2]?.price_in_usd}`}</span>}
                </div>
                <p className='car-title'>prev day</p>
              </div>
            </div>
          )}
        </div>

        <Swiper
          className="cards"
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className='card'>
                {car?.car_images && car.car_images.length > 0 ? (
                  <img className='card-image' src={`${urlImg}${car?.car_images[0]?.image?.src}`} alt={car?.name} />
                ) : (
                  <p>No image available</p>
                )}
                <h2>{car?.brand?.title}</h2>
                <div className='hr' />
                <div>
                  <span className='model_name'>{car?.model?.name}</span>  <span className='model_name'>{car?.price_in_aed}</span>   {car?.price_in_usd && <span className='car-price'>{` / $ ${car?.price_in_usd}`}</span>}
                </div>
                <p className='car-title'>prev day</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='Add-two'>
          <div className='add-top'>
            <h1 className='add-title'>AMERICAN BRANDS RENTAL DUBAI</h1>
            <Link to={`/category/${cars[4]?.category_id}`} className='add-sublink'>
              SEE ALL <i className="left-icon fa-solid fa-chevron-right"></i>
            </Link>
          </div>
          {cars.length > 4 && (
            <div key={cars[4]?.id}>
              <div className='card'>
                {cars[4]?.car_images && cars[4]?.car_images.length > 0 ? (
                  <>
                    {console.log(`Image URL: ${urlImg}${cars[4]?.car_images[0]?.image?.src}`)}
                    <img className='card-image' src={`${urlImg}${cars[4]?.car_images[0]?.image?.src}`} alt={cars[4]?.name} />
                  </>
                ) : (
                  <p>No image available</p>
                )}
                <h3>{cars[4]?.brand?.title}</h3>
                <div className='hr' />
                <div>
                  <span className='model_name'>{cars[4]?.model?.name}</span>  
                  <span className='model_name'>{cars[4]?.price_in_aed}</span>   
                  {cars[4]?.price_in_usd && <span className='car-price'>{` / $ ${cars[4]?.price_in_usd}`}</span>}
                </div>
                <p className='car-title'>prev day</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarsCard;
