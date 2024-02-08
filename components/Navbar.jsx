import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { IoHome, IoPersonCircle, IoLogOut } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdInventory } from "react-icons/md";
import "daisyui/dist/full.css";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <label htmlFor="drawer-toggle" className="drawer-toggle lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </label>
      </div>
      
      {/* Desktop Navbar */}
      <div className="hidden lg:flex flex-col justify-between h-screen w-80 px-4 py-8 bg-white shadow-lg fixed top-0 left-0">
        <div>
          <img
            src="/ateneo.png"
            alt="Ateneo Logo"
            className="w-32 mx-auto mb-4"
          />
          <h1 className="text-black font-bold text-xl text-center font-poppins mb-4">
            University Athletics Office
          </h1>
          <hr className="border-t border-gray-300 mb-4" />
          <ul className="space-y-4 flex flex-col items-start">
            <li className="font-poppins">
              <a
                href="/Dashboard"
                className="btn btn-wide btn-gray-100 text-gray-800 w-full text-left"
              >
                <IoHome className="mr-2" />
                <span className="text-lg">Dashboard</span>
              </a>
            </li>
            <li className="font-poppins">
              <a
                href="/profile"
                className="btn btn-wide btn-gray-100 text-gray-800 w-full text-left"
              >
                <IoPersonCircle className="mr-2" />
                <span className="text-lg">Profile Management</span>
              </a>
            </li>
            <li className="font-poppins">
              <a
                href="/events"
                className="btn btn-wide btn-gray-100 text-gray-800 w-full text-left"
              >
                <BsCalendar2EventFill className="mr-2" />
                <span className="text-lg">Events</span>
              </a>
            </li>
            <li className="font-poppins">
              <a
                href="/inventory"
                className="btn btn-wide btn-gray-100 text-gray-800 w-full text-left"
              >
                <MdInventory className="mr-2" />
                <span className="text-lg">Inventory</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <img
            src="/sean.jpg"
            alt="Sean"
            className="w-24 rounded-full mx-auto"
          />
          <div className="mt-4">
            <h1 className="text-base font-bold font-poppins">
              Sean Elijah V. Chavez
            </h1>
            <p className="text-sm text-gray-500 font-poppins">
              sevchavez@addu.edu.ph
            </p>
            <p className="text-sm text-gray-500 font-poppins">
              Admin Associate
            </p>
          </div>
          <span className="flex items-center justify-center mt-4 text-sm text-gray-500 font-poppins">
            <IoLogOut className="mr-2 text-lg" />
            Logout
          </span>
        </div>
      </div>
      {/* Main content area with padding */}
      <div className="lg:pl-80">{/* Add your main content here */}</div>
    </>
  );
};

export default Navbar;
