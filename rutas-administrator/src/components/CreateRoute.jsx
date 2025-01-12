import React, { useState } from 'react';
import CbxCities from './CbxCities';
import Breadcrumb from './Breadcrumb'

const CreateRoute = () => {
    const [routeName, setRouteName] = useState('');
    const [originCityId, setOriginCityId] = useState('');
    const [destinationCityId, setDestinationCityId] = useState('');
    const [distance, setDistance] = useState(0);
    const [routeCreated, setRouteCreated] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');


    // Llamada para crear la ruta
    const createRoute = async () => {

        if (!routeName || !originCityId || !destinationCityId || distance <= 0) {
            setErrorMessage('Todos los campos son obligatorios y la distancia debe ser mayor a 0.');
            setRouteCreated(null);
            return;
        }else if(originCityId === destinationCityId){
            setErrorMessage('La ciudad origen y destino no pueden ser las mismas.');
            setRouteCreated(null);
            return;
        }
        else{
            setErrorMessage('');
            setRouteCreated(null);
        }

        const routeData = {
            nombre: routeName,
            ciudadOrigenId: originCityId,
            ciudadDestinoId: destinationCityId,
            distancia: distance,
        };


        try {
            const response = await fetch('http://localhost:9090/rutas/api/v1/rutas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(routeData),
            });

            if (response.ok && (response.status === 200 || response.status === 201) ) {
                const createdRoute = await response.json();
                setRouteCreated(createdRoute);
                resetFormWithMessageCreated(); 
            } else if(!response.ok && (response.status === 400)){
                const errorData = await response.text();
                setErrorMessage(errorData);
            }
            else {
                console.error('Error al crear la ruta');
                setErrorMessage('Error al crear la ruta');
            }
        } catch (error) {
            console.error('Error al hacer la petición', error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9\s]*$/.test(value) && value.length <= 50) {          
          setRouteName(value)
          setErrorMessage('');
        } else {
          setErrorMessage('Solo se permiten caracteres alfanuméricos y un máximo de 50 caracteres.');
        }
      };

    const resetFormWithMessageCreated = () => {
        setRouteName('');
        setOriginCityId('');
        setDestinationCityId('');
        setDistance(0);
        setErrorMessage('');     
    };

    // Resetear el formulario
    const resetForm = () => {
        setRouteName('');
        setOriginCityId('');
        setDestinationCityId('');
        setDistance(0);
        setErrorMessage('');
        setRouteCreated(null);     
    };

    // Incrementar los kilómetros
    const incrementDistance = () => {
        setDistance(prevDistance => prevDistance + 1);
    };

    // Cancelar la creación de la ruta
    const cancelCreation = () => {
        resetForm();
    };

    return (
        <>
            <Breadcrumb currentPage="Crear ruta" />
            <div className="container mt-4">
                <h3>Crear Ruta</h3>

                {errorMessage && (
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="routeName" className="form-label">Nombre de la ruta</label>
                    <input
                        id="routeName"
                        type="text"
                        className="form-control"
                        value={routeName}                        
                        onChange={handleInputChange}
                    />
                </div>

                <CbxCities onCitySelect={setOriginCityId} selectedCity={originCityId} title = {"Ciudad origen"} />
                <CbxCities onCitySelect={setDestinationCityId} selectedCity={destinationCityId} title = {"Ciudad destino"} />

                <div className="mb-3">
                    <label className="form-label">Kilómetros</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={distance}
                            readOnly
                        />
                        <button className="btn btn-secondary" onClick={incrementDistance}>+1</button>
                    </div>
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary" onClick={createRoute}>Crear Ruta</button>
                    <button className="btn btn-secondary ms-2" onClick={cancelCreation}>Cancelar</button>
                </div>

                {routeCreated && (
                    <div className="alert alert-success mt-4">
                        <h4>Se ha creado la ruta: {routeCreated.nombre}</h4>
                        <ul>
                            <li>Ciudad Origen: {routeCreated.ciudadOrigenNombre}</li>
                            <li>Ciudad Destino: {routeCreated.ciudadDestinoNombre}</li>
                            <li>Distancia: {routeCreated.distancia} km</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default CreateRoute;