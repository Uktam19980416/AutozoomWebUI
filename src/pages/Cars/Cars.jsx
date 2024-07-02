/* eslint-disable no-unused-vars */
import './Cars.css'
import './Cars_resp.css'

//Car Image
import carImg from '../../assets/images/carsImg1.png'
import { useEffect, useState } from 'react'
import CarsAll from '../CarsAll/CarsAll'

import menuIcon from '../../assets/react.svg'

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
              <input type="checkbox" id={idx} />
              <label htmlFor={idx}>{item.category.name_en}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_main_brand">
          <div className="Cars_sidebar_brand_header">Brand</div>
          {datas.map((item, idx) => (
            <div className="Cars_sidebar_brand_info" key={idx}>
              <input type="checkbox" id={idx} />

              <label htmlFor={idx}>{item.brand.title}</label>
            </div>
          ))}
          {/* <div className="Cars_sidebar_brand_info">
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
          </div> */}
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
