import { useState } from "react";
import MenuGrid from "./components/MenuGrid";
import CartSidebar from "./components/CartSidebar";
import "./index.css";

const foods = [
  {
    id: 1,
    name: "Pizza",
    price: 299,
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    name: "Burger",
    price: 149,
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    name: "Pasta",
    price: 199,
    image: "https://picsum.photos/200?3",
  },
  {
    id: 4,
    name: "Sandwich",
    price: 99,
    image: "https://picsum.photos/200?4",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  return (
    <div className="container">
      <h1>🍔 Mini Food Ordering Hub</h1>

      <h2>
        Cart Items:
        {cart.reduce((sum, item) => sum + item.qty, 0)}
      </h2>

      <MenuGrid foods={foods} addToCart={addToCart} />

      <CartSidebar cart={cart} />
    </div>
  );
}

export default App;