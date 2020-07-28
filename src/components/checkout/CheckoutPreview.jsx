import React from 'react';
import { Utils } from '../../service/Utils';
import { useStateValue } from '../../context/StateProvider';

const CheckoutPreview = ({ item, index }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: updatedBasket
    });
    Utils.storeToStorage('basket', updatedBasket);
  };

  return (
    <div className='checkoutProduct'>
      <img src={item.image} alt={item.title} />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{item.title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{item.price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          {Array(item.rating)
            .fill()
            .map((_, index) => (
              <span role='img' aria-label='star' key={index}>
                ⭐
              </span>
            ))}
        </div>

        <button onClick={removeFromBasket}> Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutPreview;
