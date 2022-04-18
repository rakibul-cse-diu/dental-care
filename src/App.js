import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import CheckOutSuccess from './components/CheckOut/CheckOutSuccess/CheckOutSuccess';
import ForgotPass from './components/ForgotPass/ForgotPass';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNoFound/PageNotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {

  // 7,8,9,10,11,12
  // bonus 2, 5, 6, 7

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout/:name' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='/checkout/status' element={<CheckOutSuccess />}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resetpassword' element={<ForgotPass></ForgotPass>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
