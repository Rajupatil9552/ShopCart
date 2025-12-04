import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../../api/authApi";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      const response = await userRegister(userName, email, password);
      console.log("Registration successful:", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMsg("Registration failed. Try again");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) window.location.href = "/";
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-white/20">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="logo"
            className="h-10"
          />
        </div>

        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Create Account ✨
        </h2>

        {errorMsg && (
          <p className="text-red-400 text-center text-sm mb-4 font-medium">
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-6">

          {/* Username */}
          <div>
            <label className="text-gray-300 text-sm font-medium">User Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-900/40 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 outline-none placeholder-gray-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 bg-gray-900/40 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 outline-none placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password & Confirm */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="text-gray-300 text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full px-4 py-2 bg-gray-900/40 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 outline-none placeholder-gray-500"
                placeholder="Password"
              />
            </div>

            <div className="w-full">
              <label className="text-gray-300 text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-2 w-full px-4 py-2 bg-gray-900/40 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-2 outline-none placeholder-gray-500"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition text-white font-semibold py-2.5 rounded-lg shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Login redirect */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
