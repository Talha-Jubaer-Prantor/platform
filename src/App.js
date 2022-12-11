import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contacts/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import Navbar from './components/navbar/Navbar';
import ProfessionalDashboard from './components/ProfessionalDashboard/ProfessionalDashboard';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<SignUp></SignUp>}></Route>
      <Route path='/professionaldashboard' element={<ProfessionalDashboard></ProfessionalDashboard>}></Route>

      



    </Routes>

    </div>
  );
}

export default App;
