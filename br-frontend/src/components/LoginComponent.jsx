import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
            if (response.status === 200) {
                sessionStorage.setItem('auth', 'true');
                navigate('/books');
            }
        } catch (err) {
            setError('Hatalı Giriş');
        }
    };

    return (
        <div className='container'>
            <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Giriş Yap</h2>
                    <div className='card-body'>
                        <form onSubmit={handleLogin}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                     type='text'
                                     placeholder='Mail adresi girin'
                                     value={email}
                                     className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                             </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Şifre:</label>
                                <input
                                    type='password'
                                    placeholder='Şifreyi girin'
                                    value={password}
                                    className='form-control'
                                    onChange={(e) => setPassword(e.target.value)}
                                 />
                             </div>
                            {error && <div className='alert alert-danger'>{error}</div>}
                            <div className='offset-md-5'><button type='submit' className='btn btn-primary'>Giriş</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
