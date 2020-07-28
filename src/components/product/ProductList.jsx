import React from 'react';
import ProductPreview from './ProductPreview';

import '../../style/Product.css';

const ProductList = ({ products }) => {
  return (
    <div className='product__home'>
      {products.map((product) => (
        <ProductPreview product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
