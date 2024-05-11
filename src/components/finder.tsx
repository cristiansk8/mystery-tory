import React, { useState } from 'react';
import { participantes } from '../../data.jsx'; // Ajusta la ruta según la ubicación de tu archivo data.jsx

const ConsultaPorCorreo = () => {
  const [correo, setCorreo] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const consultarPorCorreo = () => {
    const correoEncontrado = participantes.find(item => item.email === correo);
    if (correoEncontrado) {
      setResultado(correoEncontrado);
      setError(null);
    } else {
      setResultado(null);
      setError('No se encontró ningún resultado para el correo especificado.');
    }
  };

  return (
    <div>
      <h2>Consulta por Correo Electrónico</h2>
      <input 
        type="text" 
        value={correo} 
        onChange={(e) => setCorreo(e.target.value)} 
        placeholder="Ingrese el correo electrónico" 
      />
      <button onClick={consultarPorCorreo}>Consultar</button>
      {resultado && (
        <div>
          <h3>Resultado:</h3>
          <p>Correo: {resultado.email}</p>
          <p>Nombre: {resultado.nombre}</p>
          <p>Teléfono: {resultado.telefono}</p>
          <p>Boletas: {resultado.boletas}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ConsultaPorCorreo;