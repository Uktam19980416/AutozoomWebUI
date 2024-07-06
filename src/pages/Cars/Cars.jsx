/* eslint-disable no-unused-vars */
import './Cars.css'
import './Cars_resp.css'
import { useEffect, useState } from 'react'
import CarsAll from '../CarsAll/CarsAll'
import menuIcon from '../../assets/images/menuIcon.svg';

function Cars() {
  const [menuOpen, setMenuOpen] = useState(true)
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api'
  const [datas, setDatas] = useState([])
  const [datasCategory, setDatasCategory] = useState([])
  const [datasBrand, setDatasBrand] = useState([])

  // State for selected filters
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedCarTypes, setSelectedCarTypes] = useState([])

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
    } else {
      sidebarBlock.classList.remove('carsSidebarBlock')
      carsMainBlock.classList.remove('carsMainBlock')
    }
    setMenuOpen(!menuOpen)
  }


  
  useEffect(() => {
    getFetch(`${base_URL}/cars`).then((data) => {
      setDatas(data?.data)
      console.log(data?.data)
    })

    getFetch(`${base_URL}/categories`).then((data) => {
      setDatasCategory(data?.data)
      console.log(data?.data)
    })

    getFetch(`${base_URL}/brands`).then((data) => {
      setDatasBrand(data?.data)
      console.log(data?.data)
    })
  }, [])

  const handleBrandChange = (e) => {
    const { id, checked } = e.target
    setSelectedBrands((prevSelectedBrands) =>
      checked
        ? [...prevSelectedBrands, id]
        : prevSelectedBrands.filter((brand) => brand !== id)
    )
  }

  const handleCarTypeChange = (e) => {
    const { id, checked } = e.target
    setSelectedCarTypes((prevSelectedCarTypes) =>
      checked
        ? [...prevSelectedCarTypes, id]
        : prevSelectedCarTypes.filter((carType) => carType !== id)
    )
  }

  // Filtering brands and car types based on selected checkboxes
  const filteredBrands = datasBrand.filter((brand) => selectedBrands.includes(brand.title))
  const filteredCarTypes = datasCategory.filter((category) => selectedCarTypes.includes(category.name_en))

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
          {datasCategory.map((item, idx) => (
            <div className="Cars_sidebar_carType_info" key={idx}>
              <input type="checkbox" id={item?.name_en} onChange={handleCarTypeChange} />
              <label htmlFor={item?.name_en}>{item.name_en}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_main_brand">
          <div className="Cars_sidebar_brand_header">Brand</div>
          {datasBrand.map((item, idx) => (
            <div className="Cars_sidebar_brand_info" key={idx}>
              <input type="checkbox" id={item?.title} onChange={handleBrandChange} />
              <label htmlFor={item?.title}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_modal">
          <div className="Cars_sidebar_model_info">Model</div>
          <div className="Cars_sidebar_model_select">
            <select>
              <optgroup label="Brands">
                {filteredBrands.map((brand, idx) => (
                  <option key={idx} value={brand.title}>{brand.title}</option>
                ))}
              </optgroup>
              <optgroup label="Car Types">
                {filteredCarTypes.map((category, idx) => (
                  <option key={idx} value={category.name_en}>{category.name_en}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="Cars_sidebar_buttons">
          <button className="Cars_sidebar_buttons_reset" onClick={() => {
            setSelectedBrands([]);
            setSelectedCarTypes([]);
          }}>Reset</button>
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
