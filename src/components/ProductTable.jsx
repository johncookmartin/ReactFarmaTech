import React from 'react';
import { getSdsUrl } from '../utils/blobImports';

const ProductTable = ({ data, keysToRemove }) => {
  if (!data) return null;

  const formulations = Object.entries(data).filter(
    ([key]) => !keysToRemove.includes(key)
  );
  const definition = data.definition;
  const sds = getSdsUrl(data.sds);

  return (
    <div className="product-table-container">
      <h4 className="product-definition">{definition}</h4>
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
      <div className="sds-button-container">
        <a href={sds} target="_blank" rel="noopener noreferrer">
          <button className="sds-butt">Click to view SDS</button>
        </a>
      </div>
    </div>
  );
};

export default ProductTable;
