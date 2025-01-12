import React from 'react';
import Breadcrumb from './Breadcrumb'
import useFetchData from './../hooks/useFetchData';

const ListCities = () => {

  const { data, loading, error } = useFetchData('http://localhost:9090/ciudades/api/v1/ciudades');

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-5" role="alert">
        {error}
      </div>
    );
  }

  return (
    <>
      <Breadcrumb currentPage="Listar ciudades" />
      <div className="container mt-5">
        <h1 className="mb-4">Ciudades</h1>
        <ul className="list-group">
          {data.map((ciudad) => (
            <li key={ciudad.id} className="list-group-item">
              {ciudad.nombre}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListCities;
