import React from 'react';

const ShirtDesignPreview = ({ imageUrl }) => {
  return imageUrl ? <img src={imageUrl} alt="Generated Design" /> : null;
};

export default ShirtDesignPreview;