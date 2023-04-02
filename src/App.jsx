import Navbar from './components/Navbar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Products from './components/Products.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProductList from './pages/ProductList.jsx';
import Product from './pages/Product.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
