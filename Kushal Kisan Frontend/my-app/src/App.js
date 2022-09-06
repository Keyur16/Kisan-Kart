import './App.css';
import TopNavbar from './components/TopNavbar';
import Name from './components/Name';
import Navbar2 from './components/Navbar2';
import About1 from './components/About1';
import About2 from './components/About2';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import MiniNavbar from './components/MiniNavbar';
import Menu from './components/Menu';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProductState from './context/products/ProductState';

import {

  Routes,
  Route,


} from "react-router-dom";
import FarmerProfile from './components/FarmerProfile';
import Addproductform from './components/Addproductform';
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Menupage from './Pages/Menupage';
import Aboutuspage from './Pages/Aboutuspage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import AddProduct from './Pages/AddProduct';
import CartPage from './Pages/CartPage';
import AgroTourismForm from './components/AgroTourismForm';
import Changepassword from './components/Changepassword';
import Agrotourism from './components/Agrotourism';
import AgroTourismPage from './Pages/AgroTourismPage';


function App() {
  return (
    <>



      <ProductState>
        {/* <TopNavbar/>
      <Name/>
      <Navbar2/>
      <About1/>
      <About2/>
      <OurServices/>
      <Footer/> */}



        {/* pages */}
        <Routes>

          <Route path="/" element={[<Home />]} />

          <Route path="/menu" element={[<Menupage />]} />

          <Route path="/aboutus" element={[<Aboutuspage />]} />

          <Route path="/login" element={[<Login />]} />

          <Route path="/register" element={[<SignUp />]} />

          <Route path="/profile" element={[<Profile />]} />

          <Route path="/addproductform" element={[<AddProduct />]} />

          <Route path="/agrotourismform" element={[<AgroTourismForm />]} />

          <Route path="/cart" element={[<CartPage />]} />

          <Route path="/changepassword" element={[<Changepassword />]} />

          <Route path="/agrotourism" element={[<AgroTourismPage />]} />





        </Routes>

      </ProductState>


    </>
  );
}

export default App;
