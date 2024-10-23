import React, { useState } from 'react';
import './App.css'; // Import CSS của bạn
import Login from './components/Login';
import Register from './components/Register';
import Toggle from './components/Toggle';

function App() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = (form) => {
        setIsLogin(form === 'login');
    };

    return (
        <div className="container">
            {isLogin ? <Login /> : <Register />}
            <Toggle toggleForm={toggleForm} />
        </div>
    );
}

export default App;
