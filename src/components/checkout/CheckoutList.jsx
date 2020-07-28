import React from 'react';
import CheckoutPreview from './CheckoutPreview';
const CheckoutList = ({ basket }) => {
  return (
    <div>
      {basket.map((item, index) => (
        <CheckoutPreview item={item} key={index} />
      ))}
    </div>
  );
};

export default CheckoutList;
