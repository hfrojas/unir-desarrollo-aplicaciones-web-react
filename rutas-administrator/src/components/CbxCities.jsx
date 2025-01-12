import React, { useEffect, useState } from 'react';
import useFetchData from './../hooks/useFetchData';

const CbxCities = ({ onCitySelect, selectedCity, title }) => {
  const { data: cities, loading, error } = useFetchData('http://localhost:9090/ciudades/api/v1/ciudades');

  const handleChange = (e) => {
    const selectedCityId = e.target.value;
    onCitySelect(selectedCityId); // Llama a la función onCitySelect para pasar el id de la ciudad
  };

  if (loading) return <option>Loading cities...</option>;
  if (error) return <option>Error loading cities</option>;

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <select
        className="form-select"
        value={selectedCity || ''}
        onChange={handleChange}
      >
        <option value="">Seleccione</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CbxCities;