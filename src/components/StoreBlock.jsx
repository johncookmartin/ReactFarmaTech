import React from 'react';
import logo from '../assets/logos/FarmaTechGreyLogo.png';
import './styles/storeblock.css';
import { Link } from 'react-router-dom';
import { useMobile } from '../context/MobileContext';

const StoreBlock = ({ productColor, productName }) => {
  const styles = { backgroundColor: productColor };
  const isMobile = useMobile();

  const buttonText = isMobile
    ? `Browse ${productName}`
    : `Browse ${productName} products`;

  return (
    <article className="store-block">
      <img src={logo} alt="Farma Tech Logo" />
      <div style={styles} className="store-block-color"></div>
      <h3>{productName}</h3>
      <Link to={`/products?searchText=${productName}`}>
        <button className="store-block-butt">{buttonText}</button>
      </Link>
    </article>
  );
};

export default StoreBlock;
