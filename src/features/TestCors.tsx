/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestCors = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          'https://api.serversocial.xyz/api/v1/signin',
          {
            username: 'user123',
            password: 'dym1234',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            withCredentials: true, // Necesario si se usan cookies o autenticación basada en sesiones
          }
        );

        setResponse(JSON.stringify(res.data));
      } catch (err: any) {
        if (err.response) {
          // Si hay una respuesta del servidor (p.ej., errores 4xx o 5xx)
          setError(`Error ${err.response.status}: ${err.response.statusText}`);
        } else if (err.request) {
          // Si no hay respuesta del servidor
          setError('No se recibió respuesta del servidor');
        } else {
          // Otros errores
          setError(err.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test CORS</h1>
      {response && <p>Response: {response}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default TestCors;
