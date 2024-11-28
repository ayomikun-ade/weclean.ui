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
        <button className="bg-red-600 text-white rounded-md px-3 py-2 hover:opacity-90 flex gap-4 items-center">
          <IoLogOutOutline size="1.3em" />
          Logout
        </button>
      </section>
      <section className="col-span-3 py-4 px-4 w-full flex flex-col justify-center">
        {/* <h2 className="text-2xl font-semibold">Welcome, Ayomikun</h2> */}
        <h3 className="text-3xl font-semibold my-5 self-start">
          Customer Sessions
        </h3>
        <div className="mt-5 bg-white rounded-lg shadow-lg py-8 pl-20  h-[60vh] flex flex-col">
          {/* <h3 className="text-3xl font-semibold my-5 self-start">
            Customer Sessions
          </h3> */}
        </div>
      </section>
    </div>
  );
};

export default CustomerDash;
