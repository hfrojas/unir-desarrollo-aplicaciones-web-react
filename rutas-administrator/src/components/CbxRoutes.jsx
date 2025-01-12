import React, { useState, useEffect } from 'react';
import useFetchData from './../hooks/useFetchData';


const CbxRoutes = ({ onRouteSelect, selectedRouteId }) => {
  const { data: routes, error, isLoading } = useFetchData('http://localhost:9090/rutas/api/v1/rutas');
  const [wasRouteSelected, setWasRouteSelected] = useState(false);
  const [selectedRouteDetails, setSelectedRouteDetails] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.value;
    onRouteSelect(selected);
    if(selected !== ''){
        const detailRoute = routes.find((route) => route.id === parseInt(selected, 10));
        setWasRouteSelected(true);
        setSelectedRouteDetails(detailRoute);
    }else {
        setWasRouteSelected(false);
        setSelectedRouteDetails(null); 
        onRouteSelect('');
      }
  };

  useEffect(() => {
    if (!selectedRouteId) {
      setWasRouteSelected(false);
      setSelectedRouteDetails(null);
    }
  }, [selectedRouteId]);


  return (
    <div>
      <label htmlFor="cbxRoutes" className="form-label">Selecciona una ruta:</label>
      <select
        id="cbxRoutes"
        className="form-select"
        value={selectedRouteId || ''}
        onChange={handleChange}
        disabled={isLoading || error}
      >
        <option value="">Seleccione una ruta</option>
        {routes &&
          routes.map((route) => (
            <option key={route.id} value={route.id}>
              {route.nombre}
            </option>
          ))}
      </select>

      {isLoading && <p className="text-muted mt-2">Cargando rutas...</p>}
      {error && <p className="text-danger mt-2">Error al cargar las rutas</p>}

      {wasRouteSelected && selectedRouteDetails && (
        <div className="mt-3">
          <h5>Información de la Ruta</h5>
          <ul>
            <li><strong>Nombre:</strong> {selectedRouteDetails.nombre}</li>
            <li><strong>Ciudad Origen:</strong> {selectedRouteDetails.ciudadOrigenNombre}</li>
            <li><strong>Ciudad Destino:</strong> {selectedRouteDetails.ciudadDestinoNombre}</li>
            <li><strong>Distancia:</strong> {selectedRouteDetails.distancia} km</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CbxRoutes;
