import React from 'react';
import { useEffect, useState, createContext } from 'react';
import { searchObject } from '../utils/searchObject';
import ProductGroup from '../components/ProductGroup';
import './styles/products.css';

const ProductsContext = createContext();

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
        setProducts(jsonData);
      } catch (err) {
        console.log(err.message);
      }
    };

    grabProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      return searchObject(product, searchText);
    })
    .sort((a, b) => a.group.localeCompare(b.group));

  return (
    <ProductsContext.Provider value={{ searchText: searchText }}>
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
          filteredProducts.map((data) => (
            <ProductGroup key={data.group} data={data} />
          ))
        ) : (
          <p>No products match your search</p>
        )}
      </section>
    </ProductsContext.Provider>
  );
};

export default Products;
export { ProductsContext };
