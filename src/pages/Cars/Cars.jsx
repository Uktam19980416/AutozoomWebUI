/* eslint-disable no-unused-vars */
import './Cars.css'
import './Cars_resp.css'

//Car Image
import carImg from '../../assets/images/carsImg1.png'
import { useEffect, useState } from 'react'
import CarsAll from '../CarsAll/CarsAll'

import menuIcon from '../../assets/images/menuIcon.svg';

function Cars() {
  const [menuOpen, setMenuOpen] = useState(true)
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

  const handleMenuChange = () => {
    const sidebarBlock = document.getElementById('sidebarBlock')
    const carsMainBlock = document.getElementById('carsMain')
    if (menuOpen) {
      sidebarBlock.classList.add('carsSidebarBlock')
      carsMainBlock.classList.add('carsMainBlock')
      console.log('True')
    } else {
      sidebarBlock.classList.remove('carsSidebarBlock')
      carsMainBlock.classList.remove('carsMainBlock')
      console.log('False')
    }
    setMenuOpen(!menuOpen)
  }

  const handleSelect = () => {
    const filteredData = datas.filter()
  }

  useEffect(() => {
    getFetch(`${base_URL}/cars`).then((data) => {
      setDatas(data?.data)
      console.log(data?.data)
    })
  }, [])


  return (
    <div className="Cars_container_">
      <div className="carsSidebarMenu" onClick={handleMenuChange}>
        <img src={menuIcon} width={30} height={30} alt="" />
      </div>
      <div className="Cars_sidebar " id="sidebarBlock">
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
          {datas.map((item, idx) => (
            <div className="Cars_sidebar_carType_info" key={idx}>
              <input type="checkbox" id={item?.category?.name_en} />
              <label htmlFor={item?.category?.name_en}>{item.category.name_en}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_main_brand">
          <div className="Cars_sidebar_brand_header">Brand</div>
          {datas.map((item, idx) => (
            <div className="Cars_sidebar_brand_info" key={idx}>
              <input type="checkbox" id={item?.brand?.title} />

              <label htmlFor={item?.brand?.title}>{item.brand.title}</label>
            </div>
          ))}
          
        </div>
        <div className="Cars_sidebar_modal">
          <div className="Cars_sidebar_model_info">Model</div>
          <div className="Cars_sidebar_model_select">
            <select>
              <option value="E350">E350</option>
              <option value="BMW">BMW</option>
            </select>
          </div>
        </div>
        <div className="Cars_sidebar_buttons">
          <button className="Cars_sidebar_buttons_reset">Reset</button>
          <button className="Cars_sidebar_buttons_apply">Apply Filter</button>
        </div>
      </div>
      <div className="Cars_container_main" id="carsMain">
        <div className="Cars_container_main_header">
          <a href="/" className="Cars_container_main_link">
            <span>Luxury Cars for Rent in Dubai </span>{' '}
            <span>/ Hire the latest supercar</span>
          </a>
        </div>
        <div className="CarsAllComponent">
          <CarsAll />
        </div>
      </div>
    </div>
  )
}

export default Cars