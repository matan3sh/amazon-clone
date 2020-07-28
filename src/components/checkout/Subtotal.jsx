import React from 'react';
import { useStateValue } from '../../context/StateProvider';

import '../../style/Subtotal.css';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = () => {
    let total = 0;
    for (let i = 0; i < basket?.length; i++) {
      total += basket[i].price;
    }
    return total;
  };

  return (
    <div className='subtotal'>
      <h3>
        Subtotal ({basket.length} item): ${getBasketTotal()}
      </h3>
      <div>
        <input type='checkbox' />
        This order contains a gift
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
