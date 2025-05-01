import React from 'react';

const ProductSpecial = ({ children }) => {
  return (
    <div className="product-definition">
      <p>
        <strong>Special Instructions: </strong>
        {children}
      </p>
    </div>
  );
};

export default ProductSpecial;
