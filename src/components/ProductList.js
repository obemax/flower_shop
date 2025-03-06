import React, { useState } from 'react';
import './ProductList.css'; // Стили для карточек товаров
import flower from 'C:/Users/Максим/Desktop/diplom/flower_shop/src/images/season.png';

// Пример данных для товаров
const products = [
  { id: 1, name: 'Цветок 1', image: flower, price: '300 руб.' },
  { id: 2, name: 'Цветок 2', image: flower, price: '250 руб.' },
  { id: 3, name: 'Цветок 3', image: flower, price: '200 руб.' },
  { id: 4, name: 'Цветок 4', image: flower, price: '300 руб.' },
  { id: 5, name: 'Цветок 5', image: flower, price: '250 руб.' },
  { id: 6, name: 'Цветок 6', image: flower, price: '200 руб.' },
  { id: 7, name: 'Цветок 7', image: flower, price: '300 руб.' },
  { id: 8, name: 'Цветок 8', image: flower, price: '250 руб.' },
  { id: 9, name: 'Цветок 9', image: flower, price: '200 руб.' },
  { id: 10, name: 'Цветок 10', image: flower, price: '300 руб.' },
];

function ProductList({ creating }) {
  // Создаем корзину прямо внутри компонента
  const [cart, setCart] = useState(() => {
    const initialCart = {};
    products.forEach((product) => {
      initialCart[product.id] = 0; // Изначально у всех товаров количество = 0
    });
    return initialCart;
  });

  const handleUpdateCart = (productId, quantity) => {
    setCart((prevCart) => {
      if (quantity < 0) return prevCart; // Игнорируем отрицательные значения
      return {
        ...prevCart,
        [productId]: quantity,
      };
    });
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              {creating ? (
                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => handleUpdateCart(product.id, cart[product.id] - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{cart[product.id]}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleUpdateCart(product.id, cart[product.id] + 1)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="basket-add"
                  onClick={() => handleUpdateCart(product.id, cart[product.id] + 1)}
                >
                  Добавить в корзину
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
