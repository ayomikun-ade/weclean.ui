import { Link } from "react-router-dom";

const AccountType = () => {
  return (
    <div className="flex relative flex-col h-screen justify-center items-center font-soft bg-slate-300">
      <div className="bg-white px-8 py-8 rounded-lg shadow-md">
        <h1 className=" text-5xl font-logo text-blue-700 font-bold text-center mb-8">
          WeClean.
        </h1>
        <h2 className="text-center text-2xl font-semibold mb-5">
          What type of user are you?
        </h2>
        <div className="flex gap-4 justify-center">
          <Link
            className="bg-blue-700 px-3 py-2 w-28 text-center text-white rounded-md"
            to="/signup"
          >
            Customer
          </Link>
          <Link
            className="bg-blue-700 px-3 py-2 w-28 text-center text-white rounded-md"
            to="/staff"
          >
            Staff
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
