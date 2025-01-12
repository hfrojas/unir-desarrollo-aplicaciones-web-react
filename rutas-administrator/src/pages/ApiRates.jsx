import React from 'react';

function ApiRates() {
  return (
    <div>
      <h1>Planes y Precios de RUTAS ADMINISTRATOR API</h1>
      <p>Elige el plan que mejor se adapte a tus necesidades para utilizar nuestra API:</p>

      <div>
        <h2>Básico</h2>
        <p>Precio: $29.99/mes</p>
        <ul>
          <li>Acceso a rutas entre 10 ciudades</li>
          <li>Hasta 1,000 solicitudes por mes</li>
          <li>Soporte estándar</li>
        </ul>
      </div>

      <div>
        <h2>Profesional</h2>
        <p>Precio: $59.99/mes</p>
        <ul>
          <li>Acceso a rutas entre todas las ciudades principales</li>
          <li>Hasta 10,000 solicitudes por mes</li>
          <li>Soporte prioritario</li>
        </ul>
      </div>

      <div>
        <h2>Empresarial</h2>
        <p>Precio: $99.99/mes</p>
        <ul>
          <li>Acceso a rutas avanzadas con análisis de tráfico</li>
          <li>Solicitudes ilimitadas</li>
          <li>Soporte dedicado 24/7</li>
        </ul>
      </div>
    </div>
  );
}

export default ApiRates;
