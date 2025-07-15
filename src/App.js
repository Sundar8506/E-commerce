import { useState } from "react";
import "./App.css";
import AppHeader from "./Components/Header";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, total: product.price }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      if (quantity === 0) {
        // Remove item if quantity is 0
        return prevItems.filter((item) => item.id !== productId);
      } else {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity, total: quantity * item.price }
            : item
        );
      }
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader cartItems={cartItems} updateQuantity={updateQuantity} />
        <PageContent addToCart={addToCart} />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
