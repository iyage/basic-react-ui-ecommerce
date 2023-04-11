import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SingleProduct from "./components/SingleProduct";
import Home from "./home/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/single-page/:id" element={<SingleProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
