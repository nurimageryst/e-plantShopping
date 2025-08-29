import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Optional: your styling
const ProductList = ({ onCartClick }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // Sample product list – adjust if you're loading from store or JSON
  const products = [
    {
      name: 'Aloe Vera',
      image: '/images/aloe-vera.jpg',
      cost: '$8.99',
      category: 'Succulent',
    },
    {
      name: 'Snake Plant',
      image: '/images/snake-plant.jpg',
      cost: '$14.99',
      category: 'Air Purifying',
    },
    {
      name: 'Peace Lily',
      image: '/images/peace-lily.jpg',
      cost: '$11.50',
      category: 'Flowering',
    },
    {
      name: 'Spider Plant',
      image: '/images/spider-plant.jpg',
      cost: '$9.75',
      category: 'Air Purifying',
    },
    {
      name: 'Cactus',
      image: '/images/cactus.jpg',
      cost: '$7.25',
      category: 'Succulent',
    },
    {
      name: 'Fiddle Leaf Fig',
      image: '/images/fiddle-leaf.jpg',
      cost: '$19.99',
      category: 'Tree',
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const isInCart = (productName) => {
    return cart.some((item) => item.name === productName);
  };

  return (
    <div>
      <Header onCartClick={onCartClick} />
      <h2 className="title">Our Plants</h2>

      <div className="categories">
        <p><strong>Categories:</strong> Succulent, Air Purifying, Flowering, Tree</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.cost}</p>
            <button
              className={`add-to-cart-btn ${isInCart(product.name) ? 'disabled' : ''}`}
              onClick={() => handleAddToCart(product)}
              disabled={isInCart(product.name)}
            >
              {isInCart(product.name) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
