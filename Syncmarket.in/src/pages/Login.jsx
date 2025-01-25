import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <img
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="Logo"
            className="h-12"
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Please sign in to your account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                id="email"
                type="email"
                className="block w-full pl-10 py-2.5 border !rounded-button border-gray-300 focus:ring-custom focus:border-custom"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                className="block w-full pl-10 pr-10 py-2.5 border !rounded-button border-gray-300 focus:ring-custom focus:border-custom"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePassword}
              >
                <i
                  className={`fas ${
                    passwordVisible ? "fa-eye-slash" : "fa-eye"
                  } text-gray-400`}
                ></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded-button"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            {/* <a
              href="#"
              className="text-sm font-medium text-custom hover:text-custom-600"
            >
              Forgot password?
            </a> */}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 !rounded-button text-white bg-custom hover:bg-custom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom font-medium"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-custom hover:text-custom-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
