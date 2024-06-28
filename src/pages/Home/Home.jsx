import React, { useEffect, useState } from 'react';
import CarsCard from '../../components/CarsCard/CarsCard';
import MainSlider from '../../components/MainSlider/MainSlider';
import './Home.css'; // Ensure the CSS file is correctly placed

function Home() {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const UrlImg = 'https://api.autozoomrental.com/api/uploads/images/';

  useEffect(() => {
    // Fetch categories
    fetch('https://api.autozoomrental.com/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => console.error('Error fetching categories:', error));

    // Fetch locations
    fetch('https://api.autozoomrental.com/api/locations')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLocations(data.data);
        }
      })
      .catch((error) => console.error('Error fetching locations:', error));

    // Fetch cities
    fetch('https://api.autozoomrental.com/api/cities')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCities(data.data);
        }
      })
      .catch((error) => console.error('Error fetching cities:', error));
  }, []);

  return (
    <>
      <MainSlider />
      <BrandsSection />
      <CarsCard />
      <div className="home-car">
        <div className="container">
          <h1 className='home-title'>ПОДПИСЫВАЙТЕСЬ НА НАС В ИНСТАГРАМ</h1>
          <div className="categories-car">
            {categories.map((category) => (
              <div key={category.id} className="category-car">
                <img src={`${UrlImg}${category.image_src}`} alt={category.name_en} />
              </div>
            ))}
          </div>
          <div className="home-locations">
            <div className="home-local-1">
              {locations.map((location) => (
                <div key={location.id}>
                  <a className='home-link' href={`/locations/${location.id}`}>{location.name}</a>
                </div>
              ))}
            </div>
            <div className="home-local-2">
              {cities.map((city) => (
                <div key={city.id}>
                  <a className='home-link' href={`/cities/${city.id}`}>{city.name}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
