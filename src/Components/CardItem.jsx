import React from 'react';

function CartItem({ item, removeItem }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
