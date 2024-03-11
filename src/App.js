import './App.css';
import Navbar from './Components/NavBar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Components/Pages/Main';
import About from './Components/Pages/About';
import Placetostay from './Components/Pages/Placetostay';
import Thingtodo from './Components/Pages/Thingtodo';
import Login from './Components/Pages/Login';
import ContactUs from './Components/Pages/ContactUs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Placetostay' element={<Placetostay/>}/>
        <Route path='Thingtodo' element={<Thingtodo/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
