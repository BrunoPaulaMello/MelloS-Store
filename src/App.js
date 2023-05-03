import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product.js";
import MainContainer from "./components/MainContainer/MainContainer.js";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainContainer><h1>VIRTÙ</h1></MainContainer>} />
        <Route element={<MainContainer><h1>404 Not Found</h1></MainContainer>} />
        <Route path="/products" element={<MainContainer><Products/></MainContainer>}/>
        <Route path="/product/:id" element={<MainContainer><Product/></MainContainer>}/>
        <Route path="/cart" element={<MainContainer><Cart/></MainContainer>}/>
        <Route path="/search/:search" element={<MainContainer><Search/></MainContainer>}/>
      </Routes>
    </Router>
  );
}

export default App;