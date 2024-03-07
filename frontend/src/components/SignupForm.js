import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import api from '../utils/api';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        profilePicture: '',
        termsChecked: false
    });
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form validation
        // API call to signup endpoint
        // Redirect on success
        // Display error message on failure
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <button type="submit">Sign Up</button>
            </form>
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default SignupForm;
