import { CounterContext } from "./CounterContext"; 
import { useState } from "react";


const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [clickedProducts, setClickedProducts] = useState([]); // track clicked products
  const [products, setProducts] = useState([]);
  return (
    <CounterContext.Provider
      value={{ count, setCount, clickedProducts, setClickedProducts, products, setProducts }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
