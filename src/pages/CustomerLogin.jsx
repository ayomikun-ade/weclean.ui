import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:8000/api/login", values);
      console.log(res.data);
      sessionStorage.setItem("email", res.data?.email);
      if (res.status == 200) navigate("/dashboard");
    } catch (error) {
      console.error(`Error adding customer ${error}`);
      if (error.response.status == 401)
        toast.error("Invalid credentials", { theme: "dark" });
    }
  };

  return (
    <section className="relative bg-hero-pattern w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
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
          Staff Login
        </Link>
      </nav>
      <section className="font-soft bg-white px-8 py-5 rounded-lg shadow-lg">
        <ToastContainer />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-lg w-full md:w-fit mt-3"
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
      </section>
    </section>
  );
};

export default CustomerLogin;
