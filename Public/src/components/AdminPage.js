import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
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

export default AdminPage;