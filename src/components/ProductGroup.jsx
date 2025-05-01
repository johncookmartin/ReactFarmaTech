import React from 'react';
import { useState } from 'react';
import { getImageUrl } from '../utils/blobImports';
import Modal from './Modal';
import Product from './Product';

const ProductGroup = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleModal = () => {
    if (isExpanded) {
      setIsModalOpen(true);
    } else {
      toggleExpand();
    }
  };

  return (
    <>
      <article className="product-group-container">
        <div className="product-group-header">
          <img
            className="product-group-image"
            src={getImageUrl(data.group_photo)}
            alt={data.group}
            onClick={() => (data.group_photo == null ? '' : toggleModal)}
          />
          <h3 className="product-group-name" onClick={toggleExpand}>
            {data.group}
          </h3>
        </div>
        {isExpanded && (
          <div>
            {data.products.map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </div>
        )}
      </article>

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <img src={getImageUrl(data.group_photo)} alt={data.group} />
      </Modal>
    </>
  );
};

export default ProductGroup;
