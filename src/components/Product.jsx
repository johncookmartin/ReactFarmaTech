import React from 'react';
import { useState } from 'react';
import ProductTable from './ProductTable';
import { nanoid } from 'nanoid';
import { getImageURL } from '../utils/imageUtils';
import './styles/product.css';

const Product = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const productFormulations = data.formulations.map((formulation) => ({
    ...formulation,
    id: nanoid(),
  }));

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article className="product-container">
      <div className="product-container-header">
        <img src={getImageURL(data.photo)} />
        <h3 className="product-name" onClick={toggleExpand}>
          {data.name}
        </h3>
      </div>

      {isExpanded && (
        <div className="product-container-body">
          <div className="product-formulations">
            {productFormulations.map((formulation) => (
              <ProductTable key={formulation.id} data={formulation} />
            ))}
          </div>
          {data.target_pests && (
            <div className="product-target-pests">
              <table className="product-specs-table">
                <thead>
                  <tr>
                    <th>Target Pests</th>
                  </tr>
                </thead>
                <tbody>
                  {data.target_pests.map((pest) => (
                    <tr key={pest}>
                      <td>{pest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="product-special-instructions">
            <p>
              <b>Special Instructions:</b> {data.special_instructions}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

export default Product;
