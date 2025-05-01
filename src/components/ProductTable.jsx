import React from 'react';

const ProductTable = ({ formulations, keysToRemove }) => {
  if (!formulations) return null;

  const data = Object.entries(formulations).filter(
    ([key]) => !keysToRemove.includes(key)
  );

  return (
    <div className="product-table-container">
      <table className="product-specs-table">
        <tbody>
          {data.map(([key, value]) => (
            <tr key={key}>
              <td>
                <strong>{key.replace('_', ' ')}</strong>
              </td>
              <td>
                {Array.isArray(value) ? (
                  value.join(', ')
                ) : typeof value === 'object' && value !== null ? (
                  <table>
                    <tbody>
                      {Object.entries(value).map(([subKey, subValue]) => (
                        <tr key={subKey}>
                          <td>
                            <strong>{subKey}</strong>
                          </td>
                          <td>{subValue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
