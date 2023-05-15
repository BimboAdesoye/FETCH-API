import "./App.css";
import Products from "./components/Products";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Error from "./components/Error";
import Goods from "./components/Goods";
import Crypto from "./components/Crypto";
import SingleProduct from "./components/SingleProduct";
import Countries from "./components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Goods" element={<Goods />} />
          <Route path="/Crypto" element={<Crypto />} />
          <Route path='/Countries' element={<Countries/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
