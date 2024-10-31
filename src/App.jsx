// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import ProductCard from "./components/ProductCard/ProductCard";
// import products from "../src/assets/productCard.json";
import "modern-normalize";
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import ToggleVisibility from "./components/ToggleVisibility/ToggleVisibility";
import TodoList from "./components/TodoList/TodoList";
import ToggleGrid from "./components/ToggleGrid/ToggleGrid";
import "./App.css";
import { useEffect, useState } from "react";

// function App() {
//   return (
//     <>
//       <Header />
//       <ProductCard products={products} />
//       <Footer />
//     </>
//   );
// }

const App = () => {
  const [input, setInput] = useState(localStorage.getItem("input") ?? "");
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("input", input);
  }, [input]);

  return (
    <>
      <Counter />
      <TextInput value={input} handleInput={handleInput} />
      <ToggleVisibility />
      <TodoList />
      <ToggleGrid />
    </>
  );
};

export default App;
