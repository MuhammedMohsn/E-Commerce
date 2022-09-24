import "./App.css";
import { Fragment, useState, useEffect } from "react";
import NavBar from "./Components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import HotDeals from "./Components/HotDeals";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Components/Footer'
import { getCategories } from './api'
function App() {
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <NavBar
            products={products}
            setProducts={setProducts}
            categories={categories}
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
          />
          <br />
          
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  inputSearch={inputSearch}
                  setInputSearch={setInputSearch}
                  loading={loading}
                  setLoading={setLoading}
                  products={products}
                  setProducts={setProducts}
                />
              }
            />
            <Route
              path="/HotDeals"
              element={
                <HotDeals
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                  setLoading={setLoading}
                  inputSearch={inputSearch}

                />
              }
            />
            <Route
              path="/categories/:category"
              element={<Category products={products} setProducts={setProducts} inputSearch={inputSearch}
              />}
            />
            <Route
              path="/products/:id"
              element={
                <Product
                  loading={loading}
                  setLoading={setLoading}
                  products={products}
                  setProducts={setProducts}
                  inputSearch={inputSearch}

                />
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
