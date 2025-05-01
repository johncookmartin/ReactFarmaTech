import React from 'react';

const ProductTable = ({ formulations, keysToRemove = [], children }) => {
  if (!formulations) return null;

  const normalized = Array.isArray(formulations)
    ? Object.fromEntries(formulations.map((item, index) => [index, item]))
    : formulations;

  const data = Object.entries(normalized).filter(
    ([key]) => !keysToRemove.includes(key)
  );

  const displayKey = (key) => {
    if (!/^\d+$/.test(key)) {
      return (
        <td>
          <strong>{key.replace('_', ' ')}</strong>
        </td>
      );
    }
  };

  return (
    <div className="product=table-container">
      <table className="product-specs-table">
        {children}
        <tbody>
          {data.map(([key, value]) => (
            <tr key={key}>
              {displayKey(key)}
              <td>
                {Array.isArray(value) ? (
                  value.join(', ')
                ) : typeof value === 'object' && value !== null ? (
                  <ProductTable formulations={value} />
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
