import React from 'react';
import { FormulationValueType } from '../../utils/enums';

const ProductTable = ({ formulations, keysToRemove = [] }) => {
  if (!formulations) return null;

  const filteredFormulations = formulations.filter(
    (formulation) => !keysToRemove.includes(formulation.key)
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
  const displayValue = (formulation) => {
    if (formulation.valueType === FormulationValueType.STRING) {
      return formulation.stringValue;
    } else if (formulation.valueType === FormulationValueType.ARRAY) {
      return formulation.arrayValues.join(', ');
    } else {
      return <ProductTable formulations={formulation.objectValues} />;
    }
  };

  return (
    <div className="product-table-container">
      <table className="product-specs-table">
        <tbody>
          {filteredFormulations.map((formulation) => {
            return (
              <tr key={formulation.id}>
                {displayKey(formulation.key)}
                <td>{displayValue(formulation)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
