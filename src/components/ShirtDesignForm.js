// Importa React y useState desde react
import React, { useState } from 'react';
// Importa axios para hacer llamadas HTTP
import axios from 'axios';

// Tu componente ShirtDesignForm recibe onDesignReady como prop
const ShirtDesignForm = ({ onDesignReady }) => {
  // Define el estado description para almacenar la descripción del usuario
  const [description, setDescription] = useState('');
  // Define el estado loading para gestionar si se está cargando la solicitud
  const [loading, setLoading] = useState(false);

  // Gestiona el evento de envío del formulario
  const handleSubmit = async (event) => {
    // Evita el comportamiento por defecto del formulario
    event.preventDefault();
    // Activa el estado de carga
    setLoading(true);

    try {
      // Hace una solicitud POST a la API de OpenAI
      const response = await axios.post('https://api.openai.com/v1/images/generations', {
        prompt: description,
        // ... otros parámetros necesarios para la API de OpenAI ...
      }, {
        headers: {
          // Usa la clave API desde las variables de entorno
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        }
      });

      // Invoca onDesignReady con la URL de la imagen generada
      onDesignReady(response.data.choices[0].image_url);
    } catch (error) {
      // Si hay un error, lo imprime en la consola
      console.error('Error al generar el diseño:', error);
    }

    // Desactiva el estado de carga
    setLoading(false);
  };

  // JSX para el formulario
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe tu diseño"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Generando...' : 'Generar Diseño'}
      </button>
    </form>
  );
};

// Exporta el componente
export default ShirtDesignForm;