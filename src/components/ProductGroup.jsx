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
            {data.products.map(
              (product) =>
                searchObject(product, searchText) && (
                  <Product key={product.name} product={product} />
                )
            )}
          </div>
        )}
      </article>
    </>
  );
};

export default ProductGroup;
