import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from "react";
import NavBar from "./Components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import HotDeals from "./Pages/HotDeals";
import Footer from './Components/Footer'
import Context from './Context'
function App() {
  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);
  let [inputSearch, setInputSearch] = useState("");
  return (
    <Fragment>
      <Context.Provider value={{categories,setCategories,products,setProducts,inputSearch,setInputSearch}}>
      <div className="App">
        <BrowserRouter>
          <NavBar/><br />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/HotDeals" element={<HotDeals/>}/>
            <Route path="/categories/:category" element={<Category />}/>
            <Route path="/products/:id" element={ <Product/> }/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
      </Context.Provider>
    </Fragment>
  );
}

export default App;
