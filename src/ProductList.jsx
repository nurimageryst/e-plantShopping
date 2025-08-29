import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 25,
    category: "Tropical",
    img: "/images/fiddle-leaf.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Succulent",
    img: "/images/snake-plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    category: "Flowering",
    img: "/images/peace-lily.jpg",
  },
  {
    id: 4,
    name: "Monstera",
    price: 30,
    category: "Tropical",
    img: "/images/monstera.jpg",
  },
  {
    id: 5,
    name: "Cactus",
    price: 10,
    category: "Succulent",
    img: "/images/cactus.jpg",
  },
  {
    id: 6,
    name: "Anthurium",
    price: 22,
    category: "Flowering",
    img: "/images/anthurium.jpg",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const groupedByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      <header>
        <h1>Paradise Nursery</h1>
        <Link to="/cart">🛒 Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</Link>
      </header>

      <h2>Our Plants</h2>

      {Object.keys(groupedByCategory).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="product-grid">
            {groupedByCategory[category].map((plant) => (
              <div className="product-card" key={plant.id}>
                <img src={plant.img} alt={plant.name} width="100" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;