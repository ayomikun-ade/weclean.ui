import axios from "axios";
import { useEffect, useState } from "react";
import {
  IoCalendarOutline,
  //   IoCloseSharp,
  IoLogOutOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const StaffDash = () => {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  const [staffData, setStaffData] = useState({});

  useEffect(() => {
    const getStaffData = async () => {
      try {
        const email = sessionStorage.getItem("staff-email");
        // console.log(email);
        const response = await axios.post(
          `http://localhost:8000/api/get-staff`,
          { email }
        );
        // console.log(response.data);
        setStaffData(response.data?.staff_id);
      } catch (error) {
        console.error(error);
      }
    };
    getStaffData();
  }, []);

  useEffect(() => {
    const getAllSessions = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/get-all-sessions`
        );
        // console.log(res.data);
        setSessions(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllSessions();
  }, []);

  const acceptSession = async (booking_id, e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/accept-session", {
        id: booking_id,
        staff_id: staffData,
      });
      console.log(res.data);
      if (res.status == 200) {
        toast.success("Session accepted successfully! Redirecting...", {
          theme: "dark",
        });
      }
      setTimeout(() => {
        navigate("/staff/sessions");
        // window.location.reload();
      }, [2500]);
    } catch (error) {
      console.error(`Error booking session ${error}`);
      // if (error.response.status === 400)
      toast.error("Error accepting session! Try again", { theme: "dark" });
    }
  };

  const acceptanceAlert = (booking_id, e) => {
    const confirmed = confirm("Are you sure you want to accept this session?");
    if (confirmed) {
      acceptSession(booking_id, e);
    } else {
      return;
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
            <button className="bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoTimeOutline size="1.3em" className="font-extrabold" />
              All Customer Sessions
            </button>
            <Link
              to="/staff/sessions"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoCalendarOutline size="1.3em" />
              My Sessions
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
          <h2 className="text-2xl font-semibold">Staff Dashboard</h2>
          <div className="mt-5 bg-white rounded-lg shadow-lg py-8 px-2  min-h-[60vh] flex flex-col">
            <section>
              <div className="grid grid-cols-7 text-center font-bold mb-4 text-lg text-slate-700">
                <p>Service Type</p>
                <p>Customer ID</p>
                <p>Booking Date</p>
                <p>Booking Time</p>
                <p>Session Location</p>
                <p>Status</p>
                <p></p>
              </div>
              {sessions.map((session, i) => (
                <div
                  key={i}
                  className="grid grid-cols-7 text-center mb-7 items-center"
                >
                  <p>{session.service_id}</p>
                  <p>{session.customer_id}</p>
                  <p>{new Date(session.booking_date).toLocaleDateString()}</p>
                  <p>{session.booking_time}</p>
                  <p>{session.location}</p>
                  <p
                    className={
                      session.acceptance_status === 0
                        ? "text-green-500 font-semibold"
                        : "text-blue-500 font-semibold"
                    }
                  >
                    {session.acceptance_status == 0 ? `Available` : `Assigned`}
                  </p>
                  <div className="flex flex-col gap-1 items-center">
                    <button
                      className={`flex items-center cursor-pointer bg-green-600 rounded-lg px-2 py-1 hover:bg-opacity-85 w-fit ${
                        session.acceptance_status === 0
                          ? "text-white"
                          : "cursor-not-allowed text-transparent bg-transparent"
                      }`}
                      // disabled={session.acceptance_status !== 0}
                      onClick={(e) => acceptanceAlert(session.booking_id, e)}
                    >
                      {""}
                      Accept
                    </button>
                    <button
                      className="cursor-pointer text-sm underline hover:no-underline text-blue-500"
                      disabled={session.acceptance_status !== 0}
                      // onClick={(e) => acceptSession(session.booking_id, e)}
                    >
                      {""}
                      Mark as Completed
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default StaffDash;
