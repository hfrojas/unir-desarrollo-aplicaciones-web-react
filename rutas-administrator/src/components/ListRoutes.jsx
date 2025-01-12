import React from 'react';
import Breadcrumb from './Breadcrumb'
import useFetchData from './../hooks/useFetchData';

const ListRoutes = () => {
  const { data: routes, loading, error } = useFetchData('http://localhost:9090/rutas/api/v1/rutas');

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="alert alert-info">Cargando rutas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
    <Breadcrumb currentPage="Listar rutas" />
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista de Rutas</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
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
    </div>
    </>
  );
};

export default ListRoutes;
