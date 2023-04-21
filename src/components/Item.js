import React, { useState } from 'react';

function Item({ name, category, cart, addToCart, removeFromCart }) {
  const [item, setItem] = useState(cart);

  const cartClass = item ? 'in-cart' : '';

  function setCart() {
    setItem(!item);
    item ? removeFromCart() : addToCart();
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={setCart} className={item ? 'remove' : 'add'}>
        {item ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;

// the issue with the in-cart state not persisting after filtering the list
/* 
The issue is that the Item component is keeping the state of whether it's in the cart or not, but that state is not being passed to the 
ShoppingList component. When you filter the list, the ShoppingList component re-renders and creates new instances of the Item component for 
each item that matches the filter. Since these new instances are not aware of the state of the old instances, they don't know whether they are
 in the cart or not and therefore don't apply the in-cart class.

To fix this, you can move the state of whether an item is in the cart up to the ShoppingList component. You can create a state variable to keep
 track of which items are in the cart and pass that state variable down to each Item component as a prop. Then, in the Item component, you can
  check whether the item is in the cart based on the value of that prop.
*/
