import { Link, useNavigate } from "react-router-dom";
import {
  IoTimeOutline,
  IoCalendarOutline,
  IoLogOutOutline,
  IoCloseSharp,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerDash = () => {
  const [userData, setUserData] = useState({});
  const [userSessions, setUserSessions] = useState([]);
  const navigate = useNavigate();

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
        // Fetch user sessions once user data is available
        const sessionsResponse = await axios.post(
          `http://localhost:8000/api/get-sessions`,
          { id: response.data.id }
        );
        setUserSessions(sessionsResponse.data);
        // console.log(userSessions);
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  const deleteSession = async (booking_id, e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/delete-session", {
        id: booking_id,
      });
      console.log(res.data);
      if (res.status == 200) {
        toast.success("Session deleted successfully!", { theme: "dark" });
      }
      setTimeout(() => {
        navigate("/customer/sessions");
        window.location.reload();
      }, [2500]);
    } catch (error) {
      console.error(`Error booking session ${error}`);
      // if (error.response.status === 400)
      toast.error("Error deleting session! Try again", { theme: "dark" });
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
              to="/customer/dashboard"
              className="text-white rounded-lg px-3 py-2 text-left flex gap-2 items-center"
            >
              <IoTimeOutline size="1.3em" className="font-extrabold" />
              Book Session
            </Link>
            <button className=" bg-white rounded-lg px-3 py-2 font-bold text-left flex gap-2 items-center">
              <IoCalendarOutline size="1.3em" />
              View Sessions
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
            Customer Sessions for{" "}
            <span className="text-blue-700">
              {userData.fname} {userData.lname}
            </span>
          </h3>
          <div className="mt-5 bg-white rounded-lg shadow-lg py-8  h-[60vh] flex flex-col">
            <section>
              <div className="grid grid-cols-6 text-center font-bold mb-4 text-lg text-slate-700">
                <p>Service Type</p>
                <p>Booking Date</p>
                <p>Booking Time</p>
                <p>Session Location</p>
                <p>Status</p>
                <p></p>
              </div>
              {userSessions.map((session, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 text-center mb-5 items-center"
                >
                  <p>{session.service_id}</p>
                  <p>{new Date(session.booking_date).toLocaleDateString()}</p>
                  <p>{session.booking_time}</p>
                  <p>{session.location}</p>
                  <p
                    className={
                      session.session_status === 0
                        ? "text-red-500 font-semibold"
                        : "text-green-500 font-semibold"
                    }
                  >
                    {session.session_status == 0 ? `Pending` : `Completed`}
                  </p>
                  <button
                    className="flex items-center cursor-pointer hover:text-red-500"
                    disabled={session.session_status !== 0}
                    onClick={(e) => deleteSession(session.booking_id, e)}
                  >
                    {""}
                    Cancel
                    <IoCloseSharp size="1.5em" className="ml-2" />
                  </button>
                </div>
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerDash;
