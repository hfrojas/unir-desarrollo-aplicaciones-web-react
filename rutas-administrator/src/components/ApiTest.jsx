import React from 'react';
import { Link } from 'react-router-dom';

function ApiTest() {
  return (
    <div className="container mt-4">
      <h1>Pruebas de la API</h1>
      <p>En este módulo puedes realizar las siguientes operaciones utilizando nuestra API:</p>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/list-cities" className="btn btn-link">Listar ciudades</Link>
        </li>
        <li className="list-group-item">
          <Link to="/list-routes" className="btn btn-link">Listar rutas</Link>
        </li>
        <li className="list-group-item">
          <Link to="/search-routes-ny-name" className="btn btn-link">Buscar rutas por nombre</Link>
        </li>
        <li className="list-group-item">
          <Link to="/create-route" className="btn btn-link">Crear una ruta</Link>
        </li>   
        <li className="list-group-item">
          <Link to="/delete-route" className="btn btn-link">Eliminar una ruta</Link>
        </li>       
      </ul>
    </div>
  );
}

export default ApiTest;
