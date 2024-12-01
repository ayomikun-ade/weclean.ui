import axios from "axios";
import { useEffect, useState } from "react";
import {
  IoPeople,
  IoLogOutOutline,
  IoTimeOutline,
  IoBusiness,
  IoAdd,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/customers`);
        // console.log(res.data);
        setCustomers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCustomers();
  }, []);

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
          <div>
            <h1 className="font-logo text-5xl font-bold text-white cursor-pointer">
              WeClean.
            </h1>
            <h2 className="text-2xl text-white font-hard mt-5 font-semibold">
              Admin Dashboard
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <button className=" bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoPeople size="1.3em" />
              Customers
            </button>
            <Link
              to="/admin/staffs"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoBusiness size="1.3em" className="font-extrabold" />
              Staffs
            </Link>
            <Link
              to="/admin/add-staff"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoAdd size="1.3em" className="font-extrabold" />
              Add Staff
            </Link>
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
          {/* <h2 className="text-2xl font-semibold">Admin Dashboard</h2> */}
          <h3 className="text-3xl font-semibold my-5 self-start">
            All Customers{" "}
            <span className="text-blue-700">
              {/* {userData.fname} {userData.lname} */}
            </span>
          </h3>
          <div className="mt-5 bg-white rounded-lg shadow-lg py-8 px-2 overflow-auto h-[60vh] flex flex-col">
            <section>
              <div className="grid grid-cols-5 text-center font-bold mb-4 text-lg text-slate-700">
                <p>Customer ID</p>
                <p>Customer Name</p>
                <p>Customer Email</p>
                <p>Customer Phone No.</p>
                <p>Total Bookings</p>
                {/* <p>Price</p>
                <p>Status</p>
                <p>Actions</p> */}
              </div>
              {customers.map((customer, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 text-center mb-5 items-center"
                >
                  <p>{customer.id}</p>
                  <p>
                    {customer.fname} {customer.lname}
                  </p>
                  <p>{customer.email}</p>
                  <p>{customer.phone}</p>
                  <p>{customer.total_sessions}</p>
                  {/* <p>{customer.location}</p> */}

                  {/* <p
                    className={
                      customer.session_status === 0
                        ? "text-red-500 font-semibold"
                        : "text-green-500 font-semibold"
                    }
                  >
                    {customer.session_status == 0 ? `Pending` : `Completed`}
                  </p>
                  <button
                    className={`flex items-center justify-center cursor-pointer hover:text-red-500 ${
                      customer.session_status !== 0 ? `hidden` : ``
                    }`}
                    disabled={customer.session_status !== 0}
                    // onClick={(e) => deleteAlert(customer.booking_id, e)}
                  >
                    {""}
                    Cancel
                    <IoCloseSharp size="1.5em" className="ml-2" />
                  </button> */}
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminCustomers;
