import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CarsAll from '../CarsAll/CarsAll';
import menuIcon from '../../assets/images/menuIcon.svg';

import './Cars.css';
import './Cars_resp.css';
import { t } from 'i18next';

function Cars() {
  const [menuOpen, setMenuOpen] = useState(true);
  const base_URL = 'https://realauto.limsa.uz/api';
  const [datasCar, setDatasCar] = useState([]);
  const [datasCategory, setDatasCategory] = useState([]);
  const [datasBrand, setDatasBrand] = useState([]);
  const [datasModel, setDatasModel] = useState([]);

  // State for selected filters
  // const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCarTypes, setSelectedCarTypes] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const location = useLocation();

  const getFetch = async (url) => {
    const response = await fetch(url, { method: 'GET' });
    return await response.json();
  };

  const handleMenuChange = () => {
    const sidebarBlock = document.getElementById('sidebarBlock');
    const carsMainBlock = document.getElementById('carsMain');
    if (menuOpen) {
      sidebarBlock.classList.add('carsSidebarBlock');
      carsMainBlock.classList.add('carsMainBlock');
    } else {
      sidebarBlock.classList.remove('carsSidebarBlock');
      carsMainBlock.classList.remove('carsMainBlock');
    }
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    getFetch(`${base_URL}/cars`).then((data) => {
      setDatasCar(data?.data);
      setFilteredCars(data?.data);
      console.log(data?.data);
    });

    getFetch(`${base_URL}/categories`).then((data) => {
      setDatasCategory(data?.data);
    });

    getFetch(`${base_URL}/brands`).then((data) => {
      setDatasBrand(data?.data);
    });

    getFetch(`${base_URL}/models`).then((data) => {
      setDatasModel(data?.data);
    });
  }, []);

  useEffect(() => {
    if (location.state?.selectedBrand) {
      const filtered = datasCar.filter(car => car.brand_id.toString() === location.state.selectedBrand.toString());
      setFilteredCars(filtered);
      setSelectedBrands([location.state.selectedBrand]);
    }
  }, [location.state, datasCar]);

  useEffect(() => {
    if (location.state?.selectedLocation) {
      const filtered = datasCar.filter(car => car.location_id.toString() === location.state.selectedLocation.toString());
      setFilteredCars(filtered);
      setSelectedBrands([location.state.selectedLocation]);
    }
  }, [location.state, datasCar]);

  useEffect(() => {
    if (location.state?.selectedCity) {
      const filtered = datasCar.filter(car => car.city_id.toString() === location.state.selectedCity.toString());
      setFilteredCars(filtered);
      setSelectedBrands([location.state.selectedCity]);
    }
  }, [location.state, datasCar]);

  const handleBrandChange = (e) => {
    const { id, checked } = e.target;
    setSelectedBrands((prevSelectedBrands) =>
      checked ? [...prevSelectedBrands, id] : prevSelectedBrands.filter((brand) => brand !== id)
    );
  };

  const handleCarTypeChange = (e) => {
    const { id, checked } = e.target;
    setSelectedCarTypes((prevSelectedCarTypes) =>
      checked ? [...prevSelectedCarTypes, id] : prevSelectedCarTypes.filter((carType) => carType !== id)
    );
  };

  const handleReset = () => {
    // Reset only selected checkboxes for brands and car types
    setSelectedBrands([]);
    setSelectedCarTypes([]);

    document.querySelectorAll('.Cars_sidebar input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    setFilteredCars(datasCar);
    scrollTo({top: 0});
  };

  const handleApplyFilters = () => {
    let filteredCars = datasCar;

    if (selectedBrands.length > 0) {
      filteredCars = filteredCars.filter((car) => selectedBrands.includes(car.brand_id.toString()));
    }

    if (selectedCarTypes.length > 0) {
      filteredCars = filteredCars.filter((car) => selectedCarTypes.includes(car.category_id.toString()));
    }

    setFilteredCars(filteredCars);
    scrollTo({top: 0})
  };

  const getFilteredModels = () => {
    let filteredCars = datasCar;

    if (selectedBrands.length > 0) {
      filteredCars = filteredCars.filter((car) => selectedBrands.includes(car.brand_id.toString()));
    }

    if (selectedCarTypes.length > 0) {
      filteredCars = filteredCars.filter((car) => selectedCarTypes.includes(car.category_id.toString()));
    }

    return filteredCars
      .map((car) => {
        return datasModel.find((model) => model.id === car.model_id);
      })
      .filter((model) => model !== undefined);
  };

  const filteredModels = getFilteredModels();

  console.log(selectedBrands);

  return (
    <div className="Cars_container_">
      <div className="carsSidebarMenu" onClick={handleMenuChange}>
        <img src={menuIcon} width={30} height={30} alt="" />
      </div>
      <div className="Cars_sidebar " id="sidebarBlock">
        <h2 className="Cars_sidebar_header">{t("carsFilter")}</h2>
        <div className="Cars_sidebar_offers">
          <h4 className="Cars_sidebar_offers_header">{t("carsOffer")}</h4>
          <div className="Cars_sidebar_offers_info">
            <input type="checkbox" id="checkBox1" />
            <label htmlFor="checkBox1">{t("carsOffersInfo")}</label>
          </div>
          {/* Other offers checkboxes */}
        </div>
        <div className="Cars_sidebar_carType">
          <h4 className="Cars_sidebar_carType_header">{t("carsType")}</h4>
          {datasCategory.filter((item) => datasCar.some((item2) => item2.category_id === item.id)).map((item, idx) => (
            <div className="Cars_sidebar_carType_info" key={idx}>
              <input type="checkbox" id={item.id} onChange={handleCarTypeChange} />
              <label htmlFor={item.id}>{item.name_en}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_main_brand">
          <div className="Cars_sidebar_brand_header">{t("carsBrand")}</div>
          {datasBrand.filter((item) => datasCar.some((item2) => item2.brand_id === item.id)).map((item, idx) => (
            <div className="Cars_sidebar_brand_info" key={idx}>
              <input type="checkbox" id={item.id} onChange={handleBrandChange} />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className="Cars_sidebar_modal">
          <div className="Cars_sidebar_model_info">{t("carsModel")}</div>
          <div className="Cars_sidebar_model_select">
            <select>
              <option value="">Select a model</option>
              {filteredModels.map((item, idx) => (
                <option key={idx} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="Cars_sidebar_buttons">
          <button className="Cars_sidebar_buttons_reset" onClick={handleReset}>
            {t("carsBtnReset")}
          </button>
          <button className="Cars_sidebar_buttons_apply" onClick={handleApplyFilters}>
            {t("carsBtnApply")}
          </button>
        </div>
      </div>
      <div className="Cars_container_main" id="carsMain">
        <div className="Cars_container_main_header">
          <a href="/" className="Cars_container_main_link">
            <span>{t("carsMainLink1")}</span> <span>{t("carsMainLink2")}</span>
          </a>
        </div>
        <div className="CarsAllComponent">
          <CarsAll filteredCars={filteredCars} />
        </div>
      </div>
    </div>
  );
}

export default Cars;
