import { Link, useNavigate } from "react-router-dom";
import {
  IoTimeOutline,
  IoCalendarOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomerDash = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [values, setValues] = useState({
    date: "",
    time: "",
    service_name: "",
    location: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const email = sessionStorage.getItem("email");
        // console.log(email);
        const response = await axios.post(
          `http://localhost:8000/api/get-user`,
          { email }
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    toast.success("Logout Successful. Redirecting...", { theme: "dark" });
    setTimeout(() => {
      navigate("/");
    }, [4000]);
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    console.log(values);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/book-session",
        values
      );
      console.log(res.data);
      if (res.status == 201) navigate("/login");
    } catch (error) {
      console.error(`Error adding customer ${error}`);
      if (error.response.status === 400)
        toast.error("Email already in use!", { theme: "dark" });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-4 gap-4 h-screen font-soft bg-slate-200">
        <section className="bg-blue-900 h-full py-4 px-6 col-span-1 flex flex-col justify-between rounded-sm">
          <h1 className="font-logo text-5xl font-bold text-white cursor-pointer">
            WeClean.
          </h1>
          <div className="flex flex-col gap-3">
            <button className="bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoTimeOutline size="1.3em" className="font-extrabold" />
              Book Session
            </button>
            <Link
              to="/customer/sessions"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoCalendarOutline size="1.3em" />
              View Sessions
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white rounded-md px-3 py-2 hover:opacity-90 flex gap-4 items-center"
          >
            <IoLogOutOutline size="1.3em" />
            Logout
          </button>
        </section>
        <section className="col-span-3 py-4 px-4 w-full flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">
            Welcome,{" "}
            <span className="text-blue-800">
              {userData.fname} {userData.lname}
            </span>
          </h2>
          <form
            onSubmit={handleBooking}
            className="mt-5 bg-white rounded-lg shadow-lg py-8 pl-20  h-[60vh] flex flex-col justify-center"
          >
            <h3 className="text-3xl font-semibold mb-5">
              Book a Cleaning Session
            </h3>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="date">
                Session Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={(e) => setValues({ ...values, date: e.target.value })}
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="time">
                Session Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                onChange={(e) => setValues({ ...values, time: e.target.value })}
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="service">
                Service Option
              </label>
              <select
                name="service"
                id="service"
                onChange={(e) =>
                  setValues({ ...values, service_name: e.target.value })
                }
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              >
                <option value="" defaultValue>
                  Select an option
                </option>
              </select>
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="location">
                Location{" "}
                <span className="font-light font-soft text-xs">
                  *Detailed address of location including house number
                </span>
              </label>
              <textarea
                rows={4}
                name="location"
                id="location"
                onChange={(e) =>
                  setValues({ ...values, location: e.target.value })
                }
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 px-5 py-2 rounded-md w-fit text-white mt-5 hover:opacity-85"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default CustomerDash;
