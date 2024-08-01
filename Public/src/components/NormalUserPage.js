import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NormalUserPage.css';

const NormalUserPage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="user-page">
      <h2>Normal User Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NormalUserPage;