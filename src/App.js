import React from 'react'
import './App.css';
import HomePage from './components/body/HomePage';
import LoginForm from './components/body/LoginForm';
import Navbar from './components/header/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/expenseData';
import AddexpenseForm from './components/body/AddexpenseForm';
import EditExpenseForm from './components/body/EditExpenseForm';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/add-expenses' element={<AddexpenseForm />} />
          <Route path='/edit-expenses/:id' element={<EditExpenseForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
