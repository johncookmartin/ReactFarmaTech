import React from 'react';
import { getImageUrl, getSdsUrl } from '../utils/blobImports';
import './styles/product.css';
import Carousel from './Carousel/index';
import ProductTable from './ProductTable';

const Product = ({ product }) => {
  return (
    <section className="product-container">
      <div className="product-container-header">
        {product.photos.length > 0 && (
          <Carousel
            className="product-photo"
            automate={false}
            pop={true}
            imageArr={product.photos.map((photo) => getImageUrl(photo))}
          >
            <Carousel.Button className="carousel-button forward-button" />
            <Carousel.Button
              advance={false}
              className="carousel-button back-button"
            />
          </Carousel>
        )}
        <h4 className="product-name">{product.name}</h4>
      </div>
      <div className="product-definition">
        <p>{product.definition}</p>
      </div>
      <ProductTable
        formulations={product.formulations}
        keysToRemove={product.keys_to_remove}
      />
      <div className="sds-button-container">
        <a
          href={getSdsUrl(product.sds)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sds-butt">Click to view SDS</button>
        </a>
      </div>
    </section>
  );
};

export default Product;
