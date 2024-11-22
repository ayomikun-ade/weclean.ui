import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <section className="relative bg-staff-pattern w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <nav className="flex font-soft bg-gray-100 w-full h-[7vh] items-center justify-between px-6 md:px-10 absolute top-0">
        <h2
          className="text-blue-700 font-extrabold font-logo text-4xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          WeClean.
        </h2>
        <Link
          to="/staff"
          className="text-black text-sm font-semibold hover:underline"
        >
          Staff Login
        </Link>
      </nav>
      <section className="font-soft bg-neutral-900 px-8 py-5 rounded-lg shadow-lg">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2 className="text-center text-blue-500 font-hard font-bold text-2xl mb-1">
            Admin Log In
          </h2>
          <hr className="mb-3" />
          <div className="flex flex-col mb-3">
            <label htmlFor="id" className="text-sm text-white mb-1">
              Admin ID:
            </label>
            <input
              type="number"
              className="border-2 px-3 py-1 rounded-sm outline-none placeholder:font-thin focus:border-blue-600"
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
              className="border-2 px-3 py-1 rounded-sm outline-none placeholder:font-thin focus:border-blue-600"
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
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-sm w-full md:w-fit mt-4"
          >
            Submit
          </button>
        </form>
      </section>
    </section>
  );
};

export default AdminLogin;
