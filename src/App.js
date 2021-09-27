import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { AppRouter } from "./routers/AppRouter";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </div>
  );
};

export default App;
