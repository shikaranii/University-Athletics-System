// components/Navbar.js
import Image from 'next/image';
import '../styles/globals.css'
import { IoHome, IoPersonCircle } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdInventory } from "react-icons/md";



const Navbar = () => {
  return (
    <nav id="sidenav-1" className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800" data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-position="absolute">
  <main className="bg-white font-poppins flex">
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-start"> {/* Add padding to top and bottom */}
      <div className="flex items-center justify-center p-4">
        <img src="/ateneo.png" alt="Logo" className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex flex-col items-start"> {/* Container for both image and content */}
        <ul className="list-none space-y-4"> {/* Apply space-y-4 class to ul element to add vertical gap */}
          <li>
            <a href="/Dashboard" className="flex items-center py-2 px-4 text-black hover:text-blue-600 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg">
              <div className="flex items-center"> {/* Center items vertically */}
                <IoHome className="mr-2" /> {/* Add margin to the right of the icon */}
                Dashboard
              </div>
              {/* Highlight shape */}
            </a>
          </li>
          <li>
            <a href="/profile" className="py-2 px-4 text-black hover:text-blue-600 border-b-2 border-gray-300">
              <div className="flex items-center"> {/* Center items vertically */}
                <IoPersonCircle className="mr-2" /> {/* Add margin to the right of the icon */}
                Profile Management
              </div>
            </a>
          </li>
          <li>
            <a href="/events" className="py-2 px-4 text-black hover:text-blue-600 border-b-2 border-gray-300">
              <div className="flex items-center"> {/* Center items vertically */}
                <BsCalendar2EventFill className="mr-2" /> {/* Add margin to the right of the icon */}
                Events
              </div>
            </a>
          </li>
          <li>
            <a href="/inventory" className="py-2 px-4 text-black hover:text-blue-600 border-b-2 border-gray-300 rounded-bl-lg rounded-br-lg">
              <div className="flex items-center"> {/* Center items vertically */}
                <MdInventory className="mr-2" /> {/* Add margin to the right of the icon */}
                Inventory
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</nav>




  
  
  );
}

export default Navbar;