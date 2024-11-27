import { Link } from "react-router-dom";
import {
  IoTimeOutline,
  IoCalendarOutline,
  IoLogOutOutline,
} from "react-icons/io5";

const CustomerDash = () => {
  return (
    <div className="grid grid-cols-4 gap-4 h-screen font-soft bg-slate-200">
      <section className="bg-blue-900 h-full py-4 px-6 col-span-1 flex flex-col justify-between rounded-sm">
        <h1 className="font-logo text-5xl font-bold text-white">WeClean.</h1>
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
        <button className="bg-red-600 text-white rounded-md px-3 py-2 hover:opacity-90 flex gap-4 items-center">
          <IoLogOutOutline size="1.3em" />
          Logout
        </button>
      </section>
      <section className="col-span-3 py-4 px-4 w-full flex flex-col justify-center">
        <h2 className="text-2xl font-semibold">Welcome, Ayomikun</h2>
        <form className="mt-5 bg-white rounded-lg shadow-lg py-8 pl-20  h-[60vh] flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-5">
            Book a Cleaning Session
          </h3>
          <div className="flex flex-col mb-3 w-[80%]">
            <label htmlFor="date">Session Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
            />
          </div>
          <div className="flex flex-col mb-3 w-[80%]">
            <label htmlFor="time">Session Time</label>
            <input
              type="time"
              name="time"
              id="time"
              className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
            />
          </div>
          <div className="flex flex-col mb-3 w-[80%]">
            <label htmlFor="location">Location</label>
            <textarea
              rows={4}
              name="location"
              id="location"
              className="bg-slate-100 rounded-md p-2 text-sm border-2 border-slate-100 focus:outline-none focus:border-2 focus:border-slate-500"
            ></textarea>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CustomerDash;
