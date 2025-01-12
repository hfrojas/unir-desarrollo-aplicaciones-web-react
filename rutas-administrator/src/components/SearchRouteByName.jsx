import React, { useState } from 'react';
import InputWithValidation from './InputWithValidation';
import useFetchData from './../hooks/useFetchData';
import Breadcrumb from './Breadcrumb'

const SearchRouteByName = () => {
  const [searchUrl, setSearchUrl] = useState('');
  const [hasQueried, setHasQueried] = useState(false);
  const { data: routes, loading, error, status } = useFetchData(searchUrl);

  const handleSearch = (value) => {
    setSearchUrl(`http://localhost:9090/rutas/api/v1/rutas/buscar?nombre=${encodeURIComponent(value)}`);
    setHasQueried(true);  
  };

  return (
    <>
      <Breadcrumb currentPage="Buscar rutas por nombre" />

      <div className="container mt-4">
        <h3>Buscar rutas por nombre</h3>
        <InputWithValidation
          title="Ingrese el nombre de la ruta"
          onSubmit={handleSearch}
        />

        {loading && (
          <div className="alert alert-info mt-4">Cargando rutas...</div>
        )}

        {error && hasQueried && status === 500 && (
          <div className="alert alert-danger mt-4">Error: {error}</div>
        )}

        {!loading && !error && hasQueried && routes && routes.length === 0 && (
          <div className="alert alert-warning mt-4">
            No se encontraron resultados para la búsqueda.
          </div>
        )}

        {!loading && error && status === 204 && (
          <div className="alert alert-warning mt-4">
            No se encontraron resultados para la búsqueda.
          </div>
        )}

        {!loading && !error && routes && routes.length > 0 && (
          <>
            <h4 className="mt-4">Rutas encontradas:</h4>
            <table className="table table-bordered table-striped mt-3">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Ciudad Origen</th>
                  <th>Ciudad Destino</th>
                  <th>Distancia (km)</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route) => (
                  <tr key={route.id}>
                    <td>{route.id}</td>
                    <td>{route.nombre}</td>
                    <td>{route.ciudadOrigenNombre}</td>
                    <td>{route.ciudadDestinoNombre}</td>
                    <td>{route.distancia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default SearchRouteByName;
