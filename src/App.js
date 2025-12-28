import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Layout from './Layout';
import Employees from './pages/Employees';
import { useEffect } from 'react';
import Attendence from './pages/Attendence';

function App() {

  
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/home' element={<Layout />}>
            <Route path='Employees' element={<Employees />} /></Route>
            <Route path='Abs' element={<Attendence/>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
