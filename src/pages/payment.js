import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div> {/* Content wrapper */}
      <div className="flex justify-between px-3 items-center border-b-2 border-gray-300"> {/* Navigation Bar */}
      <Link to="/" className="flex items-center cursor-pointer"> {/* Link for the logo */}
          <img className="w-14" src="img/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" alt="website-logo" />
          <span className="font-bold px-0">FlyBase</span>
        </Link>
        <div className="ml-24">
          <h1 className="font-bold">
            Payment
          </h1>
        </div>
        <nav>
          <a href="login.html" className="bg-white text-gray-800 border-2 rounded-full border-gray-800 p-2 transition ease-out hover:scale-105 hover:bg-gray-800 hover:text-white">Sign in</a>
          <a href="signup.html" className="bg-white text-gray-800 border-2 rounded-full border-gray-800 p-2 transition ease-out hover:scale-105 hover:bg-gray-800 hover:text-white">Sign up</a>
        </nav>
      </div>
      <main className="flex mx-auto w-4/5">
        <div className="border border-gray-300 h-svh w-full">
          <div>
            <div className="w-4/5 bg-gray-100 flex flex-col justify-center items-center h-12">
              <h1 className="font-bold text-lg">
                Enter Your Payment Details
              </h1>
            </div>
            <div className="w-4/5 border border-gray-300 flex flex-col justify-center items-center">
              <div className="m-6">
                <form action="payment.html">
                  <input type="text" placeholder="First Name" className="border border-gray-400 mr-9 rounded p-1" />
                  <input type="text" placeholder="Last Name" className="border border-gray-400 mr-9 rounded p-1" />
                </form>
              </div>
              <div>
                <form action="payment.html">
                  <input type="text" placeholder="Enter Card Number" className="border border-gray-400 mr-9 rounded p-1" />
                  <input type="text" placeholder="CVV" className="border border-gray-400 mr-9 rounded p-1" />
                </form>
              </div>
              <div>
                <button className="bg-gray-800 text-white border-2 rounded border-gray-800 p-2 transition ease-out hover:scale-105 mt-6 mr-9 w-32 mb-9">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
