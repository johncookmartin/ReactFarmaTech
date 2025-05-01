import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { getImageUrl } from '../utils/blobImports';
import Product from './Product';
import { ProductsContext } from '../pages/Products';
import { searchObject } from '../utils/searchObject';

const ProductGroup = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const { searchText } = useContext(ProductsContext);

  useEffect(() => {
    setIsExpanded(searchObject(data, searchText) && searchText.trim());
  }, [searchText]);

  return (
    <>
      <article className="product-group-container">
        <div className="product-group-header" onClick={toggleExpand}>
          <img
            className="product-group-image"
            src={getImageUrl(data.group_photo)}
            alt={data.group}
          />
          <h3 className="product-group-name">{data.group}</h3>
        </div>
        {isExpanded && (
          <div>
            {data.target_pests.length > 0 && (
              <>
                <div className="product-table-container">
                  <table className="product-specs-table">
                    <thead>
                      <tr>
                        <td>
                          <strong>Target Pests</strong>
                        </td>
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
                <div className="product-definition">
                  <p>
                    <strong>Special Instructions: </strong>
                    {data.special_instructions}
                  </p>
                </div>
              </>
            )}
            {data.products.map(
              (product) =>
                searchObject(
                  { ...product, target_pests: data.target_pests },
                  searchText
                ) && <Product key={product.name} product={product} />
            )}
          </div>
        )}
      </article>
    </>
  );
};

export default ProductGroup;
