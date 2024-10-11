import React from 'react';
const Login = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src="/Pharma.jpg"
            alt="Medicines"
            className="rounded-xl shadow-lg w-3/4"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Pharma ERP Login
          </h2>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-blue-900 font-semibold mb-2 text-lg">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-blue-200 rounded-xl bg-white bg-opacity-30 text-blue-900 placeholder-blue-500 focus:outline-none focus:ring-4 focus:ring-green-200 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-blue-900 font-semibold mb-2 text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-4 border border-blue-200 rounded-xl bg-white bg-opacity-30 text-blue-900 placeholder-blue-500 focus:outline-none focus:ring-4 focus:ring-green-200 transition duration-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center text-blue-900">
                <input type="checkbox" className="form-checkbox text-green-400" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a href="#" className="text-green-600 hover:underline font-semibold">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold shadow-lg hover:bg-gradient-to-l transform hover:-translate-y-1 transition duration-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
