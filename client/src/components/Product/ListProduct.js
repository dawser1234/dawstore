import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import './Listpro.css';
function ListProduct() {
  const products = useSelector(state => state.productReducer.products);
console.log(products)
  return (
    <div className='cardflex '>
      <Link to={'/'}><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
      {products.map((el) => <Product el={el} />)}
      <br></br>
    </div>
  );
}
export default ListProduct;

