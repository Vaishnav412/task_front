import {  Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Hometable from './components/Hometable';
import Add from './pages/Add';
import './bootstrap.min.css'
import Edit from './pages/Edit';
import Home from './components/Home';
import Singleview from './pages/Singleview';


function App() {
  return (
    <>
    
    <Routes>

    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/:id' element={<Home/>}/>
    <Route path='/:id/alltask' element={<Hometable/>}/>
    <Route path='/:id/add' element={<Add/>}/>
    <Route path='/:id/edit/:id' element={<Edit/>}/>
    <Route path='/:id/view/:id' element={<Singleview/>}/>

    </Routes>
    
    
  
    </>
  );
}

export default App;
