import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const SignUpForm = () => {
  return (
    <div> {/* Content Wrapper */}
      <div className="flex justify-between px-3 items-center border-b-2 border-gray-300"> {/* Navigation Bar */}
        <Link to="/" className="flex items-center cursor-pointer"> {/* Link for the logo */}
          <img className="w-14" src="img/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="website-logo" />
          <span className="font-bold px-0">FlyBase</span>
        </Link>
        <div>
          <h1 className="font-bold">
            Welcome to FlyBase
          </h1>
        </div>
        <nav>
          <Link to="/login" className="bg-white text-gray-800 border-2 rounded-full border-gray-800 p-2 transition ease-out hover:scale-105 hover:bg-gray-800 hover:text-white">Sign in</Link>
        </nav>
      </div>
      <main className="py-20 flex justify-center items-center text-center">
        <div className="flex flex-col w-[600px]"> {/* Log In box */}
          <div className="bg-gray-800 rounded shadow-md p-10 mb-2">
            <div className="pb-5 font-bold text-lg text-white">
              Create a new Account
            </div>
            <div className="text-left">
              <div className="flex justify-center items-center m-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input type="text" id="Fname" placeholder="Enter Your First Name" className="bg-white rounded text-black text-sm md:text-base h-10 md:h-12 px-2 ml-2 mr-2 shadow-md w-full" />
                <input type="text" id="Lname" placeholder="Enter Your Last Name" className="bg-white rounded text-black text-sm md:text-base h-10 md:h-12 px-2 ml-2 shadow-md w-full" />
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <input className="bg-white rounded text-black text-sm md:text-base h-10 md:h-12 px-2 ml-2 shadow-md w-full" type="text" placeholder="Enter username" />
              </div>
              <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input type="email" className="bg-white rounded text-black text-sm md:text-base h-10 md:h-12 px-2 ml-2 shadow-md w-full" placeholder="Enter your email" />
              </div>
              <div className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
                <input className="bg-white rounded text-black text-sm md:text-base h-10 md:h-12 px-2 ml-2 shadow-md w-full" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex justify-center items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
                <input className="bg-white rounded text-black text-sm md:text-base h-10 md:h-12 px-2 ml-2 shadow-md w-full" type="password" placeholder="Confirm your password" />
              </div>
            </div>
          </div>
          <div> {/* Log In Button */}
            <div>
              <a href="/" className="bg-gray-800 text-white inline-flex items-center h-10 md:h-12 w-full md:w-[300px] justify-center text-center rounded text-sm md:text-base pt-1 transition ease-out hover:scale-105 shadow-md shadow-gray-400">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpForm;
