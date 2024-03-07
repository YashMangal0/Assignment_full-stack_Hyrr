import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
