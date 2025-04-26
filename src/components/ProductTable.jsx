import React from 'react';

const ProductTable = ({ data }) => {
  if (!data) return null;

  const entries = Object.entries(data);

  return (
    <table className="product-specs-table">
      <tbody>
        {entries.map(([key, value]) =>
          key === 'id' ? null : (
            <tr key={key}>
              <td>
                <strong>{key.replace('_', ' ')}</strong>
              </td>
              <td>
                {Array.isArray(value) ? (
                  value.join(', ')
                ) : typeof value === 'object' && value !== null ? (
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
          )
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
