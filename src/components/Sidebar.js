import React from 'react';
import './Sidebar.css'; // Стили для панели
import flower from "C:/Users/Максим/Desktop/diplom/flower_shop/src/images/flower.png";
import bouquet from "C:/Users/Максим/Desktop/diplom/flower_shop/src/images/bouquet.png";
import balloons from "C:/Users/Максим/Desktop/diplom/flower_shop/src/images/balloons.png";
import plants from "C:/Users/Максим/Desktop/diplom/flower_shop/src/images/plants.png";
import toys from "C:/Users/Максим/Desktop/diplom/flower_shop/src/images/toys.png";

// Массив с категориями, ссылками на изображения и текстом
const categories = [
  { img: flower, name: "Цветы" },
  { img: bouquet, name: "Букеты" },
  { img: balloons, name: "Шарики" },
  { img: plants, name: "Растения" },
  { img: toys, name: "Игрушки" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <span className="category-text">{category.name}</span> {/* Текст для категории */}
            <img
              src={category.img}
              alt={category.name} // Альтернативный текст для картинки
              className="category-image"
            />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
