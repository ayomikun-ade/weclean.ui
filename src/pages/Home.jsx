// import background from "../assets/back-red.jpg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="h-[8vh] px-6 md:px-10 bg-white flex items-center justify-between">
        <div>
          <h2
            className="text-blue-700 font-extrabold font-logo text-4xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            WeClean.
          </h2>
        </div>
        {/* <div></div> */}
        <div className="flex items-center">
          <Link to="/login">
            <p className="text-black font-extrabold font-hard text-md hover:cursor-pointer">
              Log In
            </p>
          </Link>

          {/* <h2 className="mr-24 text-black font-extrabold font-soft text-md hover:cursor-pointer"></h2> */}
        </div>
      </nav>
      {/* <div className=" relative"> */}
      <header className="px-4 md:px-8 bg-hero-pattern bg-cover bg-center bg-no-repeat h-[80vh] mb-0">
        <div className="inset-6 flex flex-col h-full justify-center">
          <h3 className="shadow-sm text-5xl text-center font-hard text-white font-extrabold">
            Revitalize Your Space, Renew your energy.
          </h3>
          {/* <br /> */}
          <h3 className="shadow-sm text-2xl mt-2 text-center font-logo text-white font-medium">
            Where cleanliness meets excellence.
          </h3>
          <Link
            to="/signup"
            className="self-center bg-blue-700 text-white px-3 py-2 mt-3 font-soft rounded-lg hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
      </header>
      {/* </div> */}
      <main className="px-8 md:px-16">
        <div className="bg-white mt-1 mb-6 ">
          <h3 className="text-blue-700 mt-10 mb-3 font-hard text-3xl font-extrabold">
            WeClean
          </h3>
          <p className=" font-soft font-normal ">
            Our agency provides diverse cleaning services that every business or
            homeowner in Tacoma & the region gets to customize in order to get
            maximum results. WeClean only works with reliable professionals. We
            make sure your house cleaners are highly trained and experienced.
            They will use quality equipment and supplies to make your space
            spick and span. Get in touch with us today, and we’ll tell you more
            about what we can do for you so that you don’t have to stress about
            your chores.
          </p>
        </div>
        <div className="bg-white mb-12">
          <h3 className="text-blue-700 mb-3 font-hard text-3xl font-extrabold">
            Our Services
          </h3>
          <h4 className=" font-soft font-bold">One-Time Cleaning</h4>
          <h6 className=" font-soft font-normal">
            Ideal for clients who need a thorough cleaning on a specific
            occasion or for special events.
          </h6>
          <h4 className=" mt-2 font-soft font-bold">
            Regular Cleaning Services
          </h4>
          <h6 className=" font-soft font-normal">
            Weekly, bi-weekly, or monthly cleaning services for clients who want
            to maintain a consistently clean environment.
          </h6>
          <h4 className=" mt-2 font-soft font-bold">Deep Cleaning</h4>
          <h6 className=" font-soft font-normal">
            A more intensive and detailed cleaning service, focusing on areas
            that are often overlooked during regular cleaning
          </h6>
          <h4 className=" mt-2 font-soft font-bold">
            Post-Construction Cleaning
          </h4>
          <h6 className=" font-soft font-normal">
            Cleaning services for newly constructed or renovated spaces to
            remove dust, debris, and construction residue.
          </h6>
          <h4 className=" mt-2 font-soft font-bold">Laundry Services:</h4>
          <h6 className=" font-soft font-normal">
            Additional service to take care of laundry needs, such as washing
            and folding.
          </h6>
        </div>
      </main>

      <footer className="h-[6vh] bg-black flex justify-center items-center">
        <p className="font-hard text-white text-sm font-bold">
          CS-Group(A) Group 19- COSC 333 &copy; 2024
        </p>
      </footer>
    </>
  );
};

export default Home;
