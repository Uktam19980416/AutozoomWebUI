import React, { useEffect, useState } from 'react';
import { useSearchContext } from '../../context/SearchContext';
import './CarsAll.css';

const CarsAll = () => {
  const { datasCar, searchCar } = useSearchContext();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    setFilteredCars(
      datasCar.filter((car) =>
        car.title.toLowerCase().includes(searchCar.toLowerCase())
      )
    );
  }, [datasCar, searchCar]);

  return (
    <div className="cars-all">
      <h1>All Cars</h1>
      <div className="cars-list">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="car-item">
              <h2>{car.title}</h2>
              <p>{car.description}</p>
            </div>
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </div>
  );
};

export default CarsAll;
