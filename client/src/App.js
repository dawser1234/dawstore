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

function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/Profil' element={<Profil/>}/>
    <Route path='/Product' element={<ListProduct produit={Products}/>}/>
    


  
  
    </Routes>
      
     
    </div>
  );
}

export default App;
