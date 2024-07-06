import './Cars.css'
import './Cars_resp.css'
import { useEffect, useState } from 'react'
import CarsAll from '../CarsAll/CarsAll'
import menuIcon from '../../assets/images/menuIcon.svg'

function Cars() {
  const [menuOpen, setMenuOpen] = useState(true)
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api'
  const [datasCategory, setDatasCategory] = useState([])
  const [datasBrand, setDatasBrand] = useState([])

  // State for selected filters
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedCarTypes, setSelectedCarTypes] = useState([])

  const getFetch = async (url) => {
    const response = await fetch(url, { method: 'GET' })
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
    getFetch(`${base_URL}/categories`).then((data) => {
      setDatasCategory(data?.data)
    })

    getFetch(`${base_URL}/brands`).then((data) => {
      setDatasBrand(data?.data)
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
  const filteredBrands = datasBrand.filter((brand) =>
    selectedBrands.includes(brand.id)
  )
  const filteredCarTypes = datasCategory.filter((category) =>
    selectedCarTypes.includes(category.id)
  )

  const handleReset = () => {
    setSelectedBrands([])
    setSelectedCarTypes([])
  }

  const handleApplyFilters = () => {
    // Pass the filtered data to CarsAll component through props or context
  }

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
          {/* Other offers checkboxes */}
        </div>
        <div className="Cars_sidebar_carType">
          <h4 className="Cars_sidebar_carType_header">Car Type</h4>
          {datasCategory.map((item, idx) => (
            <div className="Cars_sidebar_carType_info" key={idx}>
              <input type="checkbox" id={item.id} onChange={handleCarTypeChange} />
              <label htmlFor={item.id}>{item.name_en}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_main_brand">
          <div className="Cars_sidebar_brand_header">Brand</div>
          {datasBrand.map((item, idx) => (
            <div className="Cars_sidebar_brand_info" key={idx}>
              <input type="checkbox" id={item.id} onChange={handleBrandChange} />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_modal">
          <div className="Cars_sidebar_model_info">Model</div>
          <div className="Cars_sidebar_model_select">
            <select>
              <optgroup label="Brands">
                {filteredBrands.map((brand, idx) => (
                  <option key={idx} value={brand.id}>{brand.title}</option>
                ))}
              </optgroup>
              <optgroup label="Car Types">
                {filteredCarTypes.map((category, idx) => (
                  <option key={idx} value={category.id}>{category.name_en}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="Cars_sidebar_buttons">
          <button className="Cars_sidebar_buttons_reset" onClick={handleReset}>Reset</button>
          <button className="Cars_sidebar_buttons_apply" onClick={handleApplyFilters}>Apply Filter</button>
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
          <CarsAll filteredBrands={filteredBrands} filteredCarTypes={filteredCarTypes} />
        </div>
      </div>
    </div>
  )
}

export default Cars
