import React from 'react';
import logo from '../assets/logos/FarmaTechGreyLogo.png';

const StoreBlock = ({ productColor, productName }) => {
  const styles = { backgroundColor: productColor };

  return (
    <article class="store-block">
      <img src={logo} alt="Farma Tech Logo" />
      <div style={styles} class="store-block-color"></div>
      <h3>{productName}</h3>
      <button></button>
    </article>
  );
};

export default StoreBlock;
