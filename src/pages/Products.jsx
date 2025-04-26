import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { nanoid } from 'nanoid';
import './styles/products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const grabProducts = async () => {
      try {
        const response = await fetch('/tests/products.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const decorated = jsonData.map((item) => ({ ...item, id: nanoid() }));
        setProducts(decorated);
      } catch (err) {
        console.log(err.message);
      }
    };

    grabProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (!searchText.trim()) return true;

    const fullProductString = JSON.stringify(product).toLowerCase();
    return fullProductString.includes(searchText.toLowerCase());
  });

  return (
    <section className="products-container">
      <div className="products-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))
      ) : (
        <p>No products match your search</p>
      )}
    </section>
  );
};

export default Products;
