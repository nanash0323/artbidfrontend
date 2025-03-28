import axios from 'axios';

const API_URL = "https://jancenpogi.pythonanywhere.com/api/";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register/`, JSON.stringify(userData), {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('User registered:', response.data);
        return response.data;
    } catch (error) {
        console.error('Registration Error:', error.response?.data || error.message);
        throw error.response?.data || { error: 'Registration failed' };
    }
};


export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}login/`, userData, {
            headers: { 'Content-Type': 'application/json' }
        });
        localStorage.setItem('token', response.data.token); // Store token
        return response.data;
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        throw error.response?.data || { error: 'Login failed' };
    }
};
