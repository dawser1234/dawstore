import React from 'react';
import Product from './Product';
import './Listpro.css';

function ListProduct() {
  const products = [1, 2, 3,4,5,6,7,8];

  return (
    <div className='cardflex'>
      {products.map((product, index) => (
        <Product key={index} el={product} />
      ))}
    </div>
  );
}

export default ListProduct;
