import React from 'react';
import { Link } from 'react-router-dom';
// import LogoComponent from '../components/LogoComponent'; // Import your LogoComponent here

const HomeComponent = () => {
  return (
    <div>
      {/* Content Wrapper */}
      <div className="flex justify-between px-3 items-center border-b-2 border-gray-300">
        {/* Reuse LogoComponent */}
        <Link to="/" className="flex items-center cursor-pointer"> {/* Link for the logo */}
          <img className="w-14" src="img/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="website-logo" />
          <span className="font-bold px-0">FlyBase</span>
        </Link>
        <div>
          <h1 className="font-bold">
            Welcome to FlyBase
          </h1>
        </div>
        <nav class="flex justify-start items-center">
          <div class="mr-3 pr-3 border-r border-gray-800">
            <a class="bg-white text-gray-800 border-2 rounded-full border-gray-800 p-2 transition ease-out hover:scale-105 hover:bg-gray-800 hover:text-white" href="recent">Recent Tickets</a>
          </div>
          <a href="login" className="bg-white text-gray-800 border-2 rounded-full border-gray-800 p-2 transition ease-out hover:scale-105 hover:bg-gray-800 hover:text-white">Sign in</a>
          <a href="signup" className="bg-white text-gray-800 border-2 rounded-full border-gray-800 p-2 transition ease-out hover:scale-105 hover:bg-gray-800 hover:text-white">Sign up</a>
        </nav>
      </div>

      <main className="py-8 flex flex-col justify-center items-center text-center mx-auto w-4/5">
        <div className="flex flex-col justify-start items-center">
          <div>
            <img className="rounded-3xl" src="img/background.avif" alt="" />
          </div>
          <div className="absolute left-52 top-40">
            <h1 className="font-bold text-6xl object-left text-gray-800 mb-2">Fly Anywhere </h1>
            <h1 className="text-gray-600 text-xl">Fly Budget And Comfortably</h1>
          </div>
          <div className="bg-white w-11/12 rounded-3xl px-6 py-4 mt-4 border border-gray-300 overflow-hidden"> {/* Search Container */}
            <div className="text-left flex">

              <span className="border-b-4 border-gray-400 mr-2 flex text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg> Round Trip</span>
              <span className="flex cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                One-way Trip</span>
            </div>
            <div className="text-left mt-5 flex">
              <div className="mr-4">
                <p className="text-gray">Where from?</p>
                <input type="text" placeholder="" className="border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <p className="text-gray">Where to?</p>
                <input type="text" placeholder="" className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="ml-4">
                <p className="text-gray">Departure?</p>
                <input type="date" className="h-10 border border-gray-300 rounded p-2" />
              </div>
              <div className="ml-4">
                <p className="text-gray">Return?</p>
                <input type="date" className="h-10 border border-gray-300 rounded p-2" />
              </div>
              <div className="ml-4">
                <p className="text-gray">Seats:</p>
                <input type="text" className="w-16 border border-gray-300 rounded p-2" />
              </div>
              <div className="flex justify-center items-center mt-6">
                <button className="text-white bg-gray-600 h-10 rounded-lg ml-6 w-36 shadow-md">Search</button>
              </div>
            </div>

          </div>

          <div className="w-11/12 border border-gray-300 mt-6 rounded-3xl"> {/* Search Results */}
            <div className="p-32">
              Results will be shown here...
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default HomeComponent;