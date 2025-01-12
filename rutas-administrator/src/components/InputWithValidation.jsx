import React, { useState } from 'react';

const InputWithValidation = ({ title, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // Validar que el texto sea alfanumérico
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9\s]*$/.test(value)) {
      setInputValue(value);
      setError('');
    } else {
      setError('Solo se permiten caracteres alfanuméricos.');
    }
  };

  // Manejar la validación al presionar el botón
  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setError('El campo no puede estar vacío.');
    } else {
      setError('');
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="container mt-4">
      <h4>{title}</h4>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese el valor"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      {error && <label className="text-danger">{error}</label>}
      <p></p>
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Aceptar
      </button>
    </div>
  );
};

export default InputWithValidation;
