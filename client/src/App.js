import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import NNavbar from './components/navbar/navbar';
import Carrousel from './components/carrousel/carrousel';
import { Routes ,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Logo from './components/logo/logo';
import Login from './components/login/login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Register from './components/Register/Register';
import Profil from './components/Profil/Profil';
import ListProduct from './components/Product/ListProduct';
import Products from './components/Product/Product';
import UserList from './components/UserList/UserList';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/Editproduct';
import EditProfile from './components/Profil/EditProfil';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './Redux/Actions/actionProduct';
import { getCurrent } from './Redux/Actions/actionUser';
import { getusers } from './Redux/Actions/actionUser';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import PrivateRoute from './components/Routes/PrivatesRoutes';
import AdminRoute from './components/Routes/AdminRoutes';

function App() {
  const dispatch=useDispatch()
  
  useEffect(() => {
   

dispatch(getAllProducts());


  }, [])
  useEffect(() => {
   
    
    dispatch(getCurrent())
    
      }, [])
  
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
    <Route path='/Product' element={<PrivateRoute><ListProduct/></PrivateRoute>}/>
    <Route path='/UserList' element={<AdminRoute><UserList/></AdminRoute>}/>
    <Route path='/AddProduct' element={<AdminRoute><AddProduct/></AdminRoute>}/>
    <Route path='/EditProduct/:id' element={<AdminRoute><EditProduct/></AdminRoute>}/>
    <Route path='/EditProfile/' element={<EditProfile/>}/>
    <Route path='/cart' element={<Cart/>}/>


    


  
  
    </Routes>
      
     
    </div>
  );
}

export default App;
