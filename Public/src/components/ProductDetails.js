import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../redux/productSlice ';
import './ProductDetail.css';

const ProductDetail = ({ user }) => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProduct({ ...product, [name]: value }));
  };

  return (
    <div className="product-detail">
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <p>Name: {product.name}</p>
          <p>
            Description:{" "}
            {user?.role === "admin" ? (
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleChange}
              />
            ) : (
              product.description
            )}
          </p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;