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
import { useState } from "react";

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
  const [switchBtn, setSwitchBtn] = useState(false);
  const handleSwitch = () => {
    setSwitchBtn(!switchBtn);
    console.log(switchBtn);
  };

  return (
    <>
      <Counter />
      <TextInput />
      <ToggleVisibility />
      <TodoList />
      <ToggleGrid up={handleSwitch} />
    </>
  );
};

export default App;
