import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerSignup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      console.error("No match");
      toast.error("Passwords don't match!", { theme: "dark" });
    }
  };
  return (
    <section className="bg-hero-pattern w-full h-screen bg-cover bg-no-repeat bg-center font-soft flex justify-center items-center">
      <nav className="flex font-soft bg-white w-full h-[7vh] items-center justify-between px-6 md:px-10 absolute top-0">
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
          Staff
        </Link>
      </nav>
      <section className="">
        <ToastContainer />
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h2 className="text-center text-blue-700 font-hard font-bold text-2xl mb-1">
              Customer Sign Up
            </h2>
            <hr className="mb-3" />
            <div className="md:flex gap-4">
              <div className="flex flex-col mb-3">
                <label htmlFor="fname" className="text-sm mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
                  placeholder="Enter First Name"
                  name="fname"
                  id="fname"
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="lname" className="text-sm mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
                  placeholder="Enter Last Name"
                  name="lname"
                  id="lname"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-4">
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
                <label htmlFor="phone" className="text-sm mb-1">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="border px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
                  placeholder="Enter Phone Number"
                  name="phone"
                  id="phone"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-4">
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
              <div className="flex flex-col mb-3">
                <label htmlFor="password" className="text-sm mb-1">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="border px-3 py-1 rounded-lg outline-none placeholder:font-thin focus:border-blue-600"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="password"
                  id="password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-lg w-full md:w-fit mt-3"
            >
              Submit
            </button>
          </form>
          <p className="text-sm mt-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
};

export default CustomerSignup;
