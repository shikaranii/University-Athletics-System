// components/Navbar.js
import Image from 'next/image';
import '../styles/globals.css'
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdInventory } from "react-icons/md";



const Navbar = () => {
  return (
<nav id="sidenav-1" className="absolute left-0 top-0 z-[1035] h-full w-96 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800" data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-position="absolute">
  <main className="bg-white font-poppins flex">
    <div className="container mx-auto px-8 py-12 flex flex-col items-center justify-start"> {/* Increased py-8 to py-12 */}
      <div className="flex items-center justify-center p-4">
        <img src="/ateneo.png" alt="Logo" className="w-32 h-32 rounded-full m-5 mb-10" /> {/* Increased w-25 h-25 to w-32 h-32 */}
      </div>
      <div className="flex flex-col items-start">
        <ul className="list-none space-y-4">
          <li>
            <a href="/Dashboard" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 rounded-tl-lg rounded-tr-lg daisyui-btn"> {/* Increased py-2 to py-3 */}
              <div className="flex items-center">
                <IoHome className="mr-2" />
                Dashboard
              </div>
            </a>
          </li>
          <li>
            <a href="/profile" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 daisyui-btn">
              <div className="flex items-center">
                <IoPersonCircle className="mr-2" />
                Profile Management
              </div>
            </a>
          </li>
          <li>
            <a href="/events" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 daisyui-btn">
              <div className="flex items-center">
                <BsCalendar2EventFill className="mr-2" />
                Events
              </div>
            </a>
          </li>
          <li>
            <a href="/inventory" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 rounded-bl-lg rounded-br-lg daisyui-btn"> {/* Increased py-2 to py-3 */}
              <div className="flex items-center">
                <MdInventory className="mr-2" />
                Inventory
              </div>
            </a>
          </li>
        </ul>
        <div className="flex items-center mb-6 mt-14"> {/* Increased mb-4 to mb-6 and mt-10 to mt-14 */}
            <img src="/ateneo.png" alt="Profile" className="w-12 h-12 rounded-full mr-2" /> {/* Increased w-10 h-10 to w-12 h-12 */}
            <div>
              <p className="text-base font-medium text-black">Sean Elijah Chavez</p> {/* Increased text-sm to text-base */}
              <p className="text-sm text-black">sevchavez@addu.edu.ph</p> {/* Increased text-xs to text-sm */}
              <p className="text-sm text-black">Super Admin</p> {/* Increased text-xs to text-sm */}
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