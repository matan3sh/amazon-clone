import React from 'react';

import Header from '../layout/Header';
import Banner from '../layout/Banner';
import ProductList from '../product/ProductList';

const products = [
  {
    id: 1234,
    title: 'Echo (3rd Gen) bundle with Echo Flex - Charcoal',
    price: 109.98,
    rating: 5,
    image: 'https://m.media-amazon.com/images/I/719V9EKNDvL._AC_UY218_.jpg'
  },
  {
    id: 1235,
    title: 'Logitech MX Master 2S Wireless Mouse',
    price: 78.2,
    rating: 3,
    image: 'https://m.media-amazon.com/images/I/61nlvOcfINL._AC_UY218_.jpg'
  },
  {
    id: 1236,
    title: 'Apple Watch Series 5 (GPS, 44mm)',
    price: 380,
    rating: 4,
    image: 'https://m.media-amazon.com/images/I/71HtGqb9vXL._AC_UY218_.jpg'
  },
  {
    id: 1239,
    title:
      'Magic Keyboard for 12.9-inch iPad Pro (4th Generation) - US English',
    price: 329.98,
    rating: 3,
    image: 'https://m.media-amazon.com/images/I/71vh06cKISL._AC_UY218_.jpg'
  }
];

const AmazonApp = () => {
  return (
    <div className='amazonapp'>
      <Header />
      <Banner />
      <ProductList products={products} />
    </div>
  );
};

export default AmazonApp;
