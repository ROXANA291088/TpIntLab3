import React, { useState } from 'react';

// Componente de la página principal
function MainPage() {
  return (
    <div>
      <h1>Tienda de Ropa</h1>
      <ProductList />
    </div>
  );
}

// Componente de la lista de productos
function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Camiseta', price: 20, image: 'camiseta.jpg' },
    { id: 2, name: 'Pantalón', price: 40, image: 'pantalon.jpg' },
    { id: 3, name: 'Zapatos', price: 60, image: 'zapatos.jpg' }
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Productos disponibles:</h2>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
      <Cart cartItems={cart} />
    </div>
  );
}

// Componente de un producto individual
function Product({ product, addToCart }) {
  const { id, name, price, image } = product;

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

// Componente del carrito
function Cart({ cartItems }) {
  return (
    <div>
      <h2>Carrito de compras:</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Componente principal de la aplicación
function App() {
  return <MainPage />;
}

export default App;
