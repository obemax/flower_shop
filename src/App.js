import React, { useState } from 'react';
import donna_logo from './images/donna_logo.png'; // Путь к изображению
import season_image_1 from './images/season.png'; // Путь к изображению
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import './App.css';

function App() {

  const [is_creating,set_creating] = useState(false)

  const toogle_creating = () => {
    set_creating(!is_creating)
  }

  return (
    <div className="App">
      <div className="Header">
        <img src={donna_logo} className="logo" alt="Donna Roza" />
        <div className="season_images">
          <img src={season_image_1} className="season_image" alt="season flowers" />
          <img src={season_image_1} className="season_image" alt="season flowers" />
          <img src={season_image_1} className="season_image" alt="season flowers" />
          <img src={season_image_1} className="season_image" alt="season flowers" />
          <img src={season_image_1} className="season_image" alt="season flowers" />
        </div>
      </div>
      <div className="body">
        <Sidebar />
        <ProductList
          creating={is_creating}
        />
      </div>
      <div className="footer">
        {is_creating ? (
        <button className="button-create"
        onClick={() => toogle_creating()}>вернуться к каталогу</button>
        ) : (
          <button className="button-create"
        onClick={() => toogle_creating()}>создать букет</button>
        )}
        
        <div className="contacts">улица, дом, телефон, инфо о компании</div>
      </div>
    </div>
  );
}

export default App;
