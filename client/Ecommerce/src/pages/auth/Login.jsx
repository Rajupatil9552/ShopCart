import React, { useState, useEffect } from 'react';
import { userLogin } from '../../api/authApi.js';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await userLogin(email, pass);
      if (!response || !response.data || !response.data.token) {
        throw new Error('Invalid credentials');
      }
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch {
      setErrorMsg('Invalid email or password');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="logo"
            className="h-10"
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Welcome Back 👋
        </h2>

        {errorMsg && (
          <p className="text-red-400 text-center text-sm mb-4 font-medium">
            {errorMsg}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-900/40 backdrop-blur-md text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-900/40 backdrop-blur-md text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition placeholder-gray-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition text-white font-semibold py-2.5 rounded-lg shadow-md"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
