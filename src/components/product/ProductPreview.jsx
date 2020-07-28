import React from 'react';
import { Utils } from '../../service/Utils';
import { useStateValue } from '../../context/StateProvider';

const ProductPreview = ({ product: { id, title, price, rating, image } }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: { id, title, price, rating, image }
    });
    const updatedBasket = [...basket, { id, title, price, rating, image }];
    Utils.storeToStorage('basket', updatedBasket);
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span role='img' aria-label='star' key={index}>
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default ProductPreview;
