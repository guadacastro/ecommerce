// Design.js
import React, { useState } from 'react';
import ShirtDesignForm from '../components/ShirtDesignForm';
import ShirtDesignPreview from '../components/ShirtDesignPreview';
import Layout from '../components/Layout';

const Design = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleDesignReady = (url) => {
    setImageUrl(url);
  };

  return (
    <Layout>
      <ShirtDesignForm onDesignReady={handleDesignReady} />
      <ShirtDesignPreview imageUrl={imageUrl} />
      {/* Aquí agregarías la lógica para añadir al carrito si es necesario */}
    </Layout>
  );
};

export default Design;