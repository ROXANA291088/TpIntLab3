import Home from "./Components/Home";
import CartItem from "./Components/CardItem";
import { Card } from "react-bootstrap";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Registrarse</h2>
      <Home />
      <Card/>
      <CartItem/>
      <Route/>
    </div>
  );
}

export default App;