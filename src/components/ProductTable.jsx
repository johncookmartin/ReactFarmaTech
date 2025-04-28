import React from 'react';

const ProductTable = ({ data, keysToRemove }) => {
  if (!data) return null;

  const formulations = Object.entries(data).filter(
    ([key]) => !keysToRemove.includes(key)
  );
  const definition = data.definition;
  const sds = data.sds;

  return (
    <table className="product-specs-table">
      <tbody>
        {formulations.map(([key, value]) => (
          <tr key={key}>
            <td>
              <strong>{key.replace('_', ' ')}</strong>
            </td>
            <td>
              {Array.isArray(value) ? (
                value.join(', ')
              ) : typeof value === 'object' && vale !== null ? (
                <table border="1">
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
  );
};

export default ProductTable;
