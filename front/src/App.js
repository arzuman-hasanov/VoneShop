import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/register/Login';
import SignUp from './component/register/Signup';
import Product from './component/product/Product';
import Products from './component/products/Products';
import Admin from './component/admin/Admin';
import AddEdit from './component/admin/AddEdit';
import View from './component/admin/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position='top-center' />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adduser' element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit/>} />
        <Route path="/view/:id" element={<View/>} />
      </Routes>
    </>
  );
}

export default App;


