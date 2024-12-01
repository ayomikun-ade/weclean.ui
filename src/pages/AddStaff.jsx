import { Link, useNavigate } from "react-router-dom";
import {
  IoPeople,
  IoLogOutOutline,
  IoTimeOutline,
  IoBusiness,
  IoAdd,
} from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const AddStaff = () => {
  const navigate = useNavigate();
  // const [userData, setUserData] = useState({});
  // const [services, setServices] = useState([]);
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleBooking = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/add-staff",
        values
      );
      console.log(res.data);
      if (res.status == 201) {
        toast.success("Staff registered successfully!", { theme: "dark" });
      }
      setTimeout(() => {
        navigate("/admin/staffs");
      }, [2500]);
    } catch (error) {
      console.error(`Error creating staff ${error}`);
      if (error.response.status === 400) {
        toast.error("Duplicate user!", { theme: "dark" });
      } else toast.error("Error creating staff!", { theme: "dark" });
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    toast.success("Logout Successful. Redirecting...", { theme: "dark" });
    setTimeout(() => {
      navigate("/");
    }, [3000]);
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
            <Link
              to="/admin/customers"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoPeople size="1.3em" />
              Customers
            </Link>
            <Link
              to="/admin/staffs"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoBusiness size="1.3em" className="font-extrabold" />
              Staffs
            </Link>
            <button className=" bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoAdd size="1.3em" className="font-extrabold" />
              Add Staff
            </button>
            <Link
              to="/admin/sessions"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoTimeOutline size="1.3em" className="font-extrabold" />
              Bookings
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
          <h2 className="text-3xl font-semibold">Add Staff</h2>
          <form
            onSubmit={handleBooking}
            className="mt-5 bg-white rounded-lg shadow-lg py-8 pl-20  h-[60vh] flex flex-col justify-center"
          >
            {/* <h3 className="text-3xl font-semibold mb-5">
              Book a Cleaning Session
            </h3> */}
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="id">
                Staff ID
              </label>
              <input
                type="number"
                name="id"
                id="id"
                onChange={(e) => setValues({ ...values, id: e.target.value })}
                required
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="name">
                Staff Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                required
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="email">
                Staff Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                required
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="phone">
                Staff Phone Number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
            </div>
            <div className="flex flex-col mb-3 w-[80%]">
              <label className="font-semibold mb-2" htmlFor="password">
                Staff Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
              />
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

export default AddStaff;
