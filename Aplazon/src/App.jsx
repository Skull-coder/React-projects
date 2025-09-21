import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Main from "./components/Main";
import CounterProvider from "./context/CounterProvider.jsx";
import "./App.css";
import { useState } from "react";
// import { CounterContext } from "./context/CounterContext.js";

function App() {

  const [showCart, setShowCart] = useState(false);
  

  return (
    <CounterProvider>
      <div className="app">
        <Navbar setShowCart={setShowCart} />
        { !showCart && < Main setShowCart={setShowCart}/>}
         {showCart && <Cart />}

      </div>
    </CounterProvider>
  );
}

export default App;
