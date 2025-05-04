import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../components/Product/index';
import './styles/products.css';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const initialSearchText = query.get('searchText') || '';

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState(initialSearchText);

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

  return (
    <section className="products-container">
      <div className="products-search">
        <input
          type="text"
          placeholder="Filter Products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {products
        .sort((a, b) => a.group.localeCompare(b.group))
        .map((productGroup) => (
          <Product.Group
            key={productGroup.group}
            productGroup={productGroup}
            searchText={searchText}
          >
            <Product.Table formulations={productGroup.target_pests}>
              <Product.Table.Header>Target Pests</Product.Table.Header>
            </Product.Table>
            <Product.Special>
              {productGroup.special_instructions}
            </Product.Special>
            {productGroup.products?.map((product) => (
              <Product key={product.name} product={product}>
                <Product.Table
                  formulations={product.formulations}
                  keysToRemove={product.keys_to_remove}
                />
              </Product>
            ))}
          </Product.Group>
        ))}
    </section>
  );
};

export default Products;
