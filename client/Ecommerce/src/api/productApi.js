// productApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: (import.meta.env.VITE_BACKEND_URL || 'https://ecommerce-website-85g0.onrender.com') + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const createProduct = async (productData) => {
  try {
    const response = await api.post('/product', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get('/product');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/product/detail`, { params: { id } });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(`/product`, productData, { params: { id } });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/product`, { params: { id } });
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};