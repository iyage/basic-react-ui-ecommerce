import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Category from './components/Category';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SingleProduct from './components/SingleProduct';
import Home from './home/Home';

function App() {
  return (
    <div>
   
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'>
        <Route  index element={<Home/>}/>
         <Route path='/single-page' element={<SingleProduct/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
