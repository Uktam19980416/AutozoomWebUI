import { useEffect, useState } from 'react';
import CarsCard from '../../components/CarsCard/CarsCard';
import MainSlider from '../../components/MainSlider/MainSlider';
import BrandsSection from '../../components/Brands/BrandsSection';
import Faq from '../../components/Faq/faq'
import Info from '../../components/InfoHome/Info'
import Service from '../../pages/Service/Service';
import './Home.css';
import Youtube from '../../components/YoutubeContent/Youtube';
import Rental from '../../components/Rental/Rental';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Home() {
  const {t} = useTranslation()
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); 
  
  const UrlImg = 'https://realauto.limsa.uz/api/uploads/images/';

  useEffect(() => {
    fetch('https://realauto.limsa.uz/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => console.error('Error fetching categories:', error));

    // Fetch locations
    fetch('https://realauto.limsa.uz/api/locations')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLocations(data.data);
        }
      })
      .catch((error) => console.error('Error fetching locations:', error));

   
    fetch('https://realauto.limsa.uz/api/cities')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCities(data.data);
        }
      })
      .catch((error) => console.error('Error fetching cities:', error));
  }, []);

  const navigate = useNavigate();

  const handleLocationClick = (locationId) => {
    navigate('/cars', { state: { selectedLocation: locationId } });
  };

  const handleCityClick = (cityId) => {
    navigate('/cars', { state: { selectedCity: cityId } });
  };

  return (
    <>
      <MainSlider />
      <BrandsSection />
      <CarsCard />
      <Service />
      <Info />
      <Youtube />
      <Rental />
      <Faq/>



      <div className="home-car">
        <div className="container">
          <h1 className='home-title'>{t("faq13")}</h1>
          <div className="categories-car">
            {categories.map((category) => (
              <div key={category.id} className="category-car" onClick={() => setSelectedImage(`${UrlImg}${category.image_src}`)}>
                <img src={`${UrlImg}${category.image_src}`} alt={category.name_en} />
              </div>
            ))}
          </div>
          <div className="home-locations">
            <div className="home-local-1">
              <h1>{t("faq14")}</h1>
              {locations.map((location) => (
                <div key={location.id}>
                  <div className='home-link' onClick={() => handleLocationClick(location.id)}>{location.name}</div>
                </div>
              ))}
            </div>
            <div className="home-local-2"><h1>{t("faq15")}</h1>
              {cities.map((city) => (
                <div key={city.id}>
                  <div className='home-link' onClick={() => handleCityClick(city.id)}>{city.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </>
  );
}

export default Home;
