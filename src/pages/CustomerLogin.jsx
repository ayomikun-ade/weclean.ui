import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const CustomerLogin = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <section className="relative bg-hero-pattern w-full h-screen bg-cover bg-no-repeat bg-center font-soft flex justify-center items-center">
      <Link
        to="/staff"
        className="absolute text-white text-sm px-2 py-1 rounded-lg bg-blue-700 hover:bg-blue-600 top-4 right-8"
      >
        Staff Login
      </Link>
      <ToastContainer />
      <div className="bg-white px-8 py-5 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2 className="text-center text-blue-700 font-hard font-bold text-2xl mb-1">
            Customer Log In
          </h2>
          <hr className="mb-3" />
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="text-sm mb-1">
              Email Address:
            </label>
            <input
              type="email"
              className="border px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="text-sm mb-1">
              Password:
            </label>
            <input
              type="password"
              className="border px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-lg w-fit mt-5"
          >
            Submit
          </button>
        </form>
        <p className="text-sm mt-2 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CustomerLogin;
