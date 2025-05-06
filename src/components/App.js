import React, { useState } from 'react';
import './styles.css';

const menuData = [
  { id: 1, name: 'Pancakes', category: 'Breakfast', price: '$5', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', category: 'Lunch', price: '$8', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Omelette', category: 'Breakfast', price: '$4', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Steak', category: 'Lunch', price: '$12', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Vanilla Shake', category: 'Shakes', price: '$3', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Chocolate Shake', category: 'Shakes', price: '$4', image: 'https://via.placeholder.com/150' },
];

function App() {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(menuData);
    } else {
      setMenuItems(menuData.filter(item => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems('Shakes')}>Shakes</button>
      </div>
      <div className="menu">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={`menu-item-${item.category.toLowerCase()}`}
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
