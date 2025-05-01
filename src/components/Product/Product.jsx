import React from 'react';
import { useContext } from 'react';
import { getImageUrl, getSdsUrl } from '../../utils/blobImports';
import './styles/product.css';
import Carousel from '../Carousel/index';
import { ProductContext } from './ProductGroup';
import { searchObject } from '../../utils/searchObject';

const Product = ({ product, children }) => {
  const { searchText, targetPests } = useContext(ProductContext);
  if (!searchObject({ ...product, targetPests }, searchText)) return;

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
      {children}
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
