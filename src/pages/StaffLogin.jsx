import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const StaffLogin = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <section className="relative bg-staff-pattern w-full h-screen bg-cover bg-no-repeat bg-center font-soft flex justify-center items-center">
      <Link
        to="/login"
        className="absolute text-white text-sm px-2 py-1 rounded-lg bg-neutral-900 hover:bg-blue-600 top-4 right-8"
      >
        Customer Login
      </Link>
      <ToastContainer />
      <div className="bg-neutral-900 px-8 py-5 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2 className="text-center text-blue-700 font-hard font-bold text-2xl mb-1">
            Staff Log In
          </h2>
          <hr className="mb-3" />
          <div className="flex flex-col mb-3">
            <label htmlFor="id" className="text-sm text-white mb-1">
              Staff ID:
            </label>
            <input
              type="number"
              className="border-2 px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
              placeholder="Enter ID"
              name="id"
              id="id"
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="text-sm text-white mb-1">
              Password:
            </label>
            <input
              type="password"
              className="border-2 px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
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
      </div>
      <Link
        to="/admin"
        className="absolute text-black underline text-sm px-2 py-1 rounded-lg bottom-4 right-8"
      >
        Admin Login
      </Link>
    </section>
  );
};

export default StaffLogin;
