import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contacts/Contact';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>

    </div>
  );
}

export default App;
