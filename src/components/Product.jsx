import React from 'react';
import ProductTable from './ProductTable';
import { nanoid } from 'nanoid';
import productImage from '../assets/products/stock/FT 12.jpg';
import './styles/product.css';

const Product = ({ data }) => {
  const productFormulations = data.formulations.map((formulation) => ({
    ...formulation,
    id: nanoid(),
  }));

  return (
    <article className="product-container">
      <div className="product-container-header">
        <img src={productImage} />
        <h3 className="product-name">{data.name}</h3>
      </div>
      <div className="product-container-body">
        <div className="product-formulations">
          {productFormulations.map((formulation) => (
            <ProductTable key={formulation.id} data={formulation} />
          ))}
        </div>
        <div className="product-target-pests">
          <ProductTable />
        </div>
        <div className="product-special-instructions">
          <p>
            <b>Special Instructions:</b> {data.special_instructions}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Product;
