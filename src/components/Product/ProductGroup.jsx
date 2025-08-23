import React, { createContext, useEffect, useState } from 'react';
import { searchObject } from '../../utils/searchObject';
import { getImageUrl } from '../../utils/blobImports';

const ProductContext = createContext();

const ProductGroup = ({ productGroup, searchText = '', children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    setIsExpanded(searchObject(productGroup, searchText) && searchText.trim());
  }, [productGroup, searchText]);

  if (!searchObject(productGroup, searchText)) return null;

  return (
    <ProductContext.Provider
      value={{ searchText, targetPests: productGroup.target_pests }}
    >
      <article className="product-group-container">
        <div className="product-group-header" onClick={toggleExpand}>
          <img
            className="product-group-image"
            src={getImageUrl(productGroup.group_photo)}
            alt={productGroup.group}
          />
          <h3 className="product-group-name">{productGroup.group}</h3>
        </div>
        {isExpanded && children}
      </article>
    </ProductContext.Provider>
  );
};

export default ProductGroup;
export { ProductContext };
