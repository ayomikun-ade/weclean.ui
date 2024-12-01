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

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getStaffs = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/bookings`);
        // console.log(res.data);
        setBookings(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getStaffs();
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
            <Link
              to="/admin/add-staff"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoAdd size="1.3em" className="font-extrabold" />
              Add Staff
            </Link>
            <button className=" bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoTimeOutline size="1.3em" className="font-extrabold" />
              Bookings
            </button>
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
          {/* <h2 className="text-2xl font-semibold">Welcome, Ayomikun</h2> */}
          <h3 className="text-3xl font-semibold my-5 self-start">
            All Bookings{" "}
          </h3>
          <div className="mt-5 bg-white rounded-lg shadow-lg py-8 px-2 overflow-auto h-[60vh] flex flex-col">
            <section>
              <div className="grid grid-cols-6 text-center font-bold mb-4 text-lg text-slate-700">
                <p>Booking ID</p>
                <p>Customer ID</p>
                <p>Staff ID</p>
                <p>Service Type</p>
                <p>Location</p>
                <p>Status</p>
                {/* <p>Price</p>
                <p>Status</p>
                <p>Actions</p> */}
              </div>
              {bookings.map((booking, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 text-center mb-5 items-center"
                >
                  <p>{booking.booking_id}</p>
                  <p>{booking.customer_id}</p>
                  <p>{booking.staff_id}</p>
                  <p>{booking.service_name}</p>
                  <p className="flex flex-col">
                    {new Date(booking.booking_date).toLocaleDateString()}{" "}
                    <span>{booking.booking_time}</span>
                  </p>
                  <p
                    className={`font-semibold ${
                      booking.session_status === 0
                        ? `text-red-500`
                        : `text-green-500`
                    }`}
                  >
                    {booking.session_status === 0 ? `Pending` : `Completed`}
                  </p>
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

export default AdminBookings;
