import React from 'react';

const ProductTableHeader = ({ children }) => {
  return (
    <thead>
      <tr>
        <td>
          <strong>{children}</strong>
        </td>
      </tr>
    </thead>
  );
};

export default ProductTableHeader;
