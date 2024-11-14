// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import ProductCard from "./components/ProductCard/ProductCard";
// import products from "../src/assets/productCard.json";
import "modern-normalize";
// import Counter from "./components/Counter/Counter";
// import TextInput from "./components/TextInput/TextInput";
// import ToggleVisibility from "./components/ToggleVisibility/ToggleVisibility";
// import TodoList from "./components/TodoList/TodoList";
// import ToggleGrid from "./components/ToggleGrid/ToggleGrid";
import "./App.css";
import { useContext, useEffect, useState } from "react";
// import SubmitForm from "./components/SubmitForm/SubmitForm";
import SearchForm from "./components/SearchForm/SearchForm";
import MovieList from "./components/MovieList/MovieList";
import movies from "./assets/movies";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { yourContext } from "./context/NewContext";

// // function App() {
// //   return (
// //     <>
// //       <Header />
// //       <ProductCard products={products} />
// //       <Footer />
// //     </>
// //   );
// // }

// // const App = () => {
//   // const [input, setInput] = useState(localStorage.getItem("input") ?? "");
//   // const handleInput = (event) => {
//   //   setInput(event.target.value);
//   // };

//   // useEffect(() => {
//   //   localStorage.setItem("input", input);
//   // }, [input]);

//   // const [counter, setCounter] = useState(0);

//   // const handleCounterPlus = () => {
//   //   setCounter(counter + 1);
//   // };
//   // const handleCounterMinus = () => {
//   //   setCounter(counter - 1);
//   // };
//   // const handleCounterReset = () => {
//   //   setCounter(0);
//   // };

//   // useEffect(() => {
//   //   const setIntervalId = setInterval(() => {
//   //     setCounter((prev) => {
//   //       if (prev === 0) {
//   //         clearInterval(setIntervalId);
//   //         return prev;
//   //       }
//   //       return prev + 1;
//   //     });
//   //   }, 1000);
//   //   return () => clearInterval(setIntervalId);
//   // }, [counter]);
//   return (
//     <>
//       {/* <Counter
//         plus={handleCounterPlus}
//         minus={handleCounterMinus}
//         value={counter}
//         reset={handleCounterReset}
//       />
//       <TextInput value={input} handleInput={handleInput} />
//       <ToggleVisibility />
//       <TodoList />
//       <ToggleGrid /> */}
//       <SubmitForm />
//     </>
//   );
// };

// export default App;

const App = () => {
  const { yourValue } = useContext(yourContext);
  const [query, setQuery] = useState("");
  const [moviesData, setMoviesData] = useState(movies);
  const [loader, setLoader] = useState(false);
  const handleQuery = (query) => {
    setQuery(query.query.toLowerCase());
    return;
  };
  useEffect(() => {
    if (yourValue) {
      document.querySelector("body").style.backgroundColor = "#444444";
    } else {
      document.querySelector("body").style.backgroundColor = "white";
    }
  }, [yourValue]);
  useEffect(() => {
    if (query === "") return;
    const searchMovie = () => {
      try {
        setLoader(true);
        setMoviesData(
          movies.filter((movie) => movie.title.toLowerCase().includes(query))
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };
    searchMovie();
  }, [query]);

  return (
    <>
      <SearchForm handleQuery={handleQuery} />
      {loader && <Loader />}
      {!moviesData.length && <ErrorMessage />}
      {query && <MovieList movies={moviesData} />}
    </>
  );
};

export default App;
