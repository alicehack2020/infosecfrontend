import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import Form from './dashboard/Form';
import UpdateForm from './dashboard/UpdateFome';
import UpdatePasswordForm from './auth/UpdatePasswordForm';
import UpdateProfile from './auth/UpdateProfile';

function App() {
  return (
    <>
      <Routes>
      <Route element={<Login/>} path='/login' />
      <Route element={<Register/>} path='/register' />
      <Route element={<UpdatePasswordForm/>} path='/updatepassword' />
      <Route element={<UpdateProfile/>} path='/updateprofile' />
      <Route element={<Form/>} path='/form' />
      <Route element={<UpdateForm/>} path='/form/:id' />
      <Route element={<DashBoard/>} path='/' />
      </Routes>
     </>
  );
}

export default App;
