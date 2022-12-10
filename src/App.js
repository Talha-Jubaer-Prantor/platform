import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contacts/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>


    </Routes>

    </div>
  );
}

export default App;
