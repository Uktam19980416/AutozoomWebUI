// import { useEffect, useState } from 'react'
// // import Slider from "react-slick";
// import styles from './BrandSlider.module.css'
// import { Link } from 'react-router-dom'

// function MultipleRows() {
//   const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api'
//   const base_URL2 =
//     'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
//   const [datas, setDatas] = useState([])

//   const getFetch = async (url) => {
//     const response = await fetch(url, {
//       method: 'GET',
//     })
//     return await response.json()
//   }

//   useEffect(() => {
//     getFetch(`${base_URL}/brands`).then((data) => {
//       setDatas(data?.data)
//     })
//   }, [])

//   return (
//     <>
//       <div className={styles.brands__title_block}>
//         <h2 className={styles.slider__brands_title}>Brands</h2>
//       </div>
//       <div className={styles.slider__container}>
//         {datas.map((item) => (
//           <Link to={`/cars/${item.id}`} key={item.id} className={styles.brand__images}>
//             <img
//               src={`${base_URL2}${item.image_src}`}
//               alt={item.title}
//               className={styles.brand__img}
//             />
//             <p className={styles.brand__text}>{item.title}</p>
//           </Link>
//         ))}
//       </div>
//     </>
//   )
// }

// export default MultipleRows

import './Brands.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// Import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api'
  const base_URL2 =
    'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
  const [datas, setDatas] = useState([])

  const getFetch = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    })
    return await response.json()
  }

  useEffect(() => {
    getFetch(`${base_URL}/brands`).then((data) => {
      setDatas(data?.data)
    })
  }, [])
  return (
    <div className='BrandWrapper'>
      <div className="container">
        <h2 className="brands-title">BRANDS</h2>
        <div className="Brands-Swipper-flex">
          <Swiper
            slidesPerView={6}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {datas.map((item) => (
              <SwiperSlide key={item.id} className="swiper__slider">
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