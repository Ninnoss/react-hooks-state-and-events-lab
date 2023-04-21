import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  function updateCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function addToCart(id) {
    setCart([...cart, id]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((itemID) => itemID !== id));
  }

  const filteredItems = items.filter((item) => selectedCategory === 'All' || item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={updateCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            cart={cart.includes(item.id)}
            addToCart={() => addToCart(item.id)}
            removeFromCart={() => removeFromCart(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
