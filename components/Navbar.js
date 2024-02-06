// components/Navbar.js
import Image from 'next/image';
import '../styles/globals.css'
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdInventory } from "react-icons/md";



const Navbar = () => {
  return (
<nav id="sidenav-1" className="absolute left-0 top-0 z-[1035] h-full w-100 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800" data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-position="absolute">
  <main className="bg-white font-poppins flex">
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-start">
      <div className="flex items-center justify-center p-4">
        <img src="/ateneo.png" alt="Logo" className="w-25 h-25 rounded-full m-5 mb-10" />
      </div>
      <div className="flex flex-col items-start">
        <ul className="list-none space-y-4">
          <li>
            <a href="/Dashboard" className="flex items-center py-2 px-4 text-black hover:text-blue-600 border-2 border-gray-300 rounded-tl-lg rounded-tr-lg">
              <div className="flex items-center">
                <IoHome className="mr-2" />
                Dashboard
              </div>
            </a>
          </li>
          <li>
            <a href="/profile" className="flex items-center py-2 px-4 text-black hover:text-blue-600 border-2 border-gray-300">
              <div className="flex items-center">
                <IoPersonCircle className="mr-2" />
                Profile Management
              </div>
            </a>
          </li>
          <li>
            <a href="/events" className="flex items-center py-2 px-4 text-black hover:text-blue-600 border-2 border-gray-300">
              <div className="flex items-center">
                <BsCalendar2EventFill className="mr-2" />
                Events
              </div>
            </a>
          </li>
          <li>
            <a href="/inventory" className="flex items-center py-2 px-4 text-black hover:text-blue-600 border-2 border-gray-300 rounded-bl-lg rounded-br-lg">
              <div className="flex items-center">
                <MdInventory className="mr-2" />
                Inventory
              </div>
            </a>
          </li>
        </ul>
        <div className="flex items-center mb-4 mt-10">
            <img src="/ateneo.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
            <div>
              <p className="text-sm font-medium text-black">Sean Elijah Chavez</p>
              <p className="text-xs text-black">sevchavez@addu.edu.ph</p>
              <p className="text-xs text-black">Super Admin</p>
            </div>
          </div>
          {/* Logout Text */}
          <a href="#" className="text-xs text-gray-500 padding">Logout</a>
      </div>
    </div>
  </main>
</nav>





  
  
  );
}

export default Navbar;