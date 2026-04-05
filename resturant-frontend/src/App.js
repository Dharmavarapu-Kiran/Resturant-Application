
import './App.css';
import { BrowserRouter,Route,Router,Routes } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import CategoryPage from './Pages/CategoryPage';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
