import axios from 'axios';

const API_URL = 'http://localhost:8080/api/expenses';

export const registerUser = async (userData) => {
    const response = await axios.post('http://localhost:8080/api/auth/register', userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
    return response.data;
};

export const getExpenses = async (userId) => {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
};

export const addExpense = async (expenseData) => {
    const response = await axios.post(API_URL, expenseData);
    return response.data;
};

export const getTotalSpending = async (userId) => {
    const response = await axios.get(`${API_URL}/user/${userId}/total`);
    return response.data;
};

export const getCategorySummary = async (userId) => {
    const response = await axios.get(`${API_URL}/user/${userId}/category-summary`);
    return response.data;
};
