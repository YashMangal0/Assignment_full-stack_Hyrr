import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
            <SignupForm />
        </div>
    );
};

export default SignupPage;
