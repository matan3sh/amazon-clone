import React from 'react';
import Header from '../layout/Header';
import Subtotal from '../checkout/Subtotal';
import CheckoutList from '../checkout/CheckoutList';
import { useStateValue } from '../../context/StateProvider';

import '../../style/Checkout.css';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className='checkout'>
        <div className='checkout__left'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt='amazon-ad'
            className='checkout__ad'
          />
          {!basket?.length ? (
            <div>
              <h2>Your Shopping Basket is Empty</h2>
              <p>
                You have no items in yout basket. To buy one or more items,
                click "Add to basket" net to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className='checkout__title'>Your Shopping Basket</h2>
              <CheckoutList basket={basket} />
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className='checkout__right'>
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
