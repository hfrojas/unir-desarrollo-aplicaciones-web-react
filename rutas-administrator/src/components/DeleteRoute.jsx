import React, { useState } from 'react';
import CbxRoutes from './CbxRoutes';

const DeleteRoute = () => {
    const [selectedRouteId, setSelectedRouteId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleCancel = () => {
      setSelectedRouteId(''); 
      setSuccessMessage('');
      setErrorMessage('');
    };
  
    const handleDelete = async () => {
      if (!selectedRouteId) {
        setErrorMessage('Debe seleccionar una ruta para eliminar.');
        return;
      }
  
      const userConfirmed = window.confirm('¿Está seguro de que desea eliminar esta ruta?');
      if (!userConfirmed) return;
  
      try {
        const response = await fetch(`http://localhost:9090/rutas/api/v1/rutas/${selectedRouteId}`, {
          method: 'DELETE',
        });
  
        if (response.status === 204) {
          setSuccessMessage('La ruta ha sido eliminada correctamente.');
          setSelectedRouteId(null); 
        } else {
          throw new Error('Error al intentar eliminar la ruta.');
        }
      } catch (error) {
        setErrorMessage('Ocurrió un error al eliminar la ruta. Inténtelo de nuevo.');
      }
    };
  
    return (
      <div className="container mt-4">
        <h3>Eliminar una Ruta</h3>
  
        <div className="mb-3">
          <CbxRoutes onRouteSelect={setSelectedRouteId} selectedRouteId={selectedRouteId} />
        </div>
  
        {successMessage && <p className="alert alert-success">{successMessage}</p>}
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
  
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancelar
          </button>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
            disabled={!selectedRouteId}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  };
  
  export default DeleteRoute;