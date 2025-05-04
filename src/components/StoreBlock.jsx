import React from 'react';
import logo from '../assets/logos/FarmaTechGreyLogo.png';
import './styles/storeblock.css';
import { Link, useNavigate } from 'react-router-dom';

const StoreBlock = ({ productColor, productName }) => {
  const navigate = useNavigate();
  const styles = { backgroundColor: productColor };

  return (
    <article className="store-block">
      <img src={logo} alt="Farma Tech Logo" />
      <div style={styles} className="store-block-color"></div>
      <h3>{productName}</h3>
      <Link to={`/products?searchText=${productName}`}>
        <button className="store-block-butt">
          Browse {productName} products
        </button>
      </Link>
    </article>
  );
};

export default StoreBlock;
