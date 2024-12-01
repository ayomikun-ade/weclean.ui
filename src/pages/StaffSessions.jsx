import axios from "axios";
import { useEffect, useState } from "react";
import {
  IoCalendarOutline,
  IoLogOutOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const StaffSessions = () => {
  const navigate = useNavigate();

  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const getStaffData = async () => {
      try {
        const email = sessionStorage.getItem("staff-email");
        // console.log(email);
        // Fetch staff sessions
        const response = await axios.post(
          `http://localhost:8000/api/get-staff-sessions`,
          { email }
        );
        setUserSessions(response.data);
        // console.log(userSessions);
      } catch (error) {
        console.error(error);
      }
    };
    getStaffData();
  }, []);

  const [staffData, setStaffData] = useState({});

  useEffect(() => {
    const getStaff = async () => {
      try {
        const email = sessionStorage.getItem("staff-email");
        // console.log(email);
        const response = await axios.post(
          `http://localhost:8000/api/get-staff`,
          { email }
        );
        // console.log(response.data);
        setStaffData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getStaff();
  }, []);

  const completeSession = async (booking_id, e) => {
    e.preventDefault();
    // console.log(booking_id);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/complete-session",
        {
          id: booking_id,
        }
      );
      console.log(res.data);
      if (res.status == 200) {
        toast.success("Session marked as completed! Redirecting...", {
          theme: "dark",
        });
      }
      setTimeout(() => {
        //   navigate("/staff/sessions");
        window.location.reload();
      }, [2500]);
    } catch (error) {
      console.error(`Error booking session ${error}`);
      // if (error.response.status === 400)
      toast.error("Error accepting session! Try again", { theme: "dark" });
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
              to="/staff/dashboard"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoTimeOutline size="1.3em" className="font-extrabold" />
              Book Session
            </Link>
            <button className=" bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoCalendarOutline size="1.3em" />
              My Sessions
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
            Staff Sessions for{" "}
            <span className="text-blue-700">{staffData.name}</span>
          </h3>
          <div className="mt-5 bg-white rounded-lg shadow-lg py-8 px-3 h-[60vh] flex flex-col">
            <section>
              <div className="grid grid-cols-7 text-center font-bold mb-4 text-lg text-slate-700">
                <p>Service</p>
                <p>Customer</p>
                <p>Booking Details</p>
                <p>Location</p>
                <p>Price</p>
                <p>Status</p>
                <p>Actions</p>
              </div>
              {userSessions.map((session, i) => (
                <div
                  key={i}
                  className="grid grid-cols-7 text-center mb-7 items-center"
                >
                  <p>{session.service_name}</p>
                  <p>
                    {session.fname} {session.lname}
                  </p>
                  <p className="flex flex-col">
                    {new Date(session.booking_date).toLocaleDateString()}{" "}
                    <span>{session.booking_time}</span>
                  </p>
                  {/* <p>{session.booking_time}</p> */}
                  <p>{session.location}</p>
                  <p>N{session.price}</p>
                  <p
                    className={
                      session.acceptance_status === 0
                        ? "text-green-500 font-semibold"
                        : "text-blue-500 font-semibold"
                    }
                  >
                    {session.acceptance_status == 0 ? `Available` : `Assigned`}
                  </p>
                  <div>
                    <button
                      className={`cursor-pointer text-sm underline hover:no-underline text-blue-500 ${
                        session.acceptance_status !== 0
                          ? // session.staff_id == staffData
                            ""
                          : "hidden cursor-not-allowed text-transparent bg-transparent"
                      } ${session.session_status !== 0 ? "hidden" : ""}`}
                      // disabled={session.acceptance_status !== 0}
                      onClick={(e) => completeSession(session.booking_id, e)}
                    >
                      {""}
                      Mark as Completed
                    </button>
                    <p className={`cursor-pointer font-semibold text-blue-500`}>
                      {session.session_status == 0 ? `` : `Completed`}
                    </p>
                  </div>
                  {/* <div className="flex flex-col gap-1 items-center">
                    <button
                      className={`flex items-center cursor-pointer bg-green-600 rounded-lg px-2 py-1 hover:bg-opacity-85 w-fit ${
                        session.acceptance_status === 0
                          ? "text-white"
                          : "hidden cursor-not-allowed text-transparent bg-transparent"
                      }`}
                      // disabled={session.acceptance_status !== 0}
                      onClick={(e) => acceptanceAlert(session.booking_id, e)}
                    >
                      {""}
                      Accept
                    </button>
                    <div>
                      <button
                        className={`cursor-pointer text-sm underline hover:no-underline text-blue-500 ${
                          session.acceptance_status !== 0 &&
                          session.staff_id == staffData
                            ? ""
                            : "hidden cursor-not-allowed text-transparent bg-transparent"
                        } ${session.session_status !== 0 ? "hidden" : ""}`}
                        // disabled={session.acceptance_status !== 0}
                        onClick={(e) => completeSession(session.booking_id, e)}
                      >
                        {""}
                        Mark as Completed
                      </button>
                      <p
                        className={`cursor-pointer font-semibold text-blue-500`}
                      >
                        {session.session_status == 0 ? `` : `Completed`}
                      </p>
                    </div>
                  </div> */}
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default StaffSessions;
