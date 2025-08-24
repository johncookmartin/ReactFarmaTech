import React from 'react';

const ProductTargetPests = ({
  targetPests,
  includeAndMore = true,
  children,
}) => {
  if (!targetPests) return null;

  return (
    <div className="product-table-container">
      <table className="product-specs-table">
        {children}
        <tbody>
          {targetPests.map((targetPest) => {
            return (
              <tr key={targetPest.id}>
                <td>{targetPest.targetPest}</td>
              </tr>
            );
          })}
          {includeAndMore && (
            <tr>
              <td>And more...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTargetPests;
