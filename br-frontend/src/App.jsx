import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListBookComponent from './components/ListBookComponent';
import BookComponent from './components/BookComponent';
import LoginComponent from './components/LoginComponent';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = sessionStorage.getItem('auth');
    return isAuthenticated ? element : <Navigate to='/login' />;
};

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path='/login' element={<LoginComponent />} />
                <Route path='/' element={<Navigate to='/books' />} />
                <Route path='/books' element={<PrivateRoute element={<ListBookComponent />} />} />
                <Route path='/add-book' element={<PrivateRoute element={<BookComponent />} />} />
                <Route path='/update-book/:id' element={<PrivateRoute element={<BookComponent />} />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
