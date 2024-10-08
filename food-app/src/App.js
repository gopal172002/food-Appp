import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Menu from "./pages/Menu/Menu.js"
import Contact from "./pages/Contact/Contact.js"
import Blog from "./pages/Blog/Blog.js"
import Cart from "./pages/Cart/Cart.js"
import Buy from "./pages/Buy/Buy.js"
import WishList from "./pages/WishList/WishList.js"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buynow" element={<Buy />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </Router>
  );
}

export default App;
