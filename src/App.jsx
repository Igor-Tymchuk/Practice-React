import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import products from "../src/assets/productCard.json";
import "modern-normalize";

function App() {
  return (
    <>
      <Header />
      <ProductCard products={products} />
      <Footer />
    </>
  );
}

export default App;
