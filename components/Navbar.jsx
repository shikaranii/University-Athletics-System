// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css'
import { IoHome, IoPersonCircle,IoLogOut } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { MdInventory } from "react-icons/md";
import 'daisyui/dist/full.css';



const Navbar = () => {
  return (
    <div className="drawer lg:drawer-open h-screen w-screen flex">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      
    </div> 
    <div className="drawer-side bg-white text-black">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <div className="flex flex-col items-center">
        <img src="/ateneo.png" alt="Ateneo Logo" className="w-32  mx-auto mt-6 mb-4" />
        <li className="flex items-center mb-4">
          <h1 className="text-black font-bold text-xl font-poppins">University Athletics Office</h1>
        </li>
        <hr className="my-4 border-t border-gray-300" />
        <ul className="menu p-4 w-80 min-h-full mb-10">
  {/* Sidebar content here */}
  <ul className="menu p-4 w-80  mb-10">
  {/* Sidebar content here */}
  <li className="mb-2 font-poppins">
    <a href="/Dashboard" className="btn-wide text-gray-800 flex items-left bg-gray-100"> 
      <span className="mr-2 text-lg"><IoHome /></span>
      <span className="text-lg">Dashboard</span>
    </a>
  </li>
  <li className="mb-2 font-poppins">
    <a href="/profile" className="btn-wide text-gray-800 flex items-left bg-gray-100">
      <span className="mr-2 text-lg"><IoPersonCircle /></span>
      <span className="text-lg">Profile Management</span>
    </a>
  </li>
  <li className="mb-2 font-poppins">
    <a href="/events" className="btn-wide text-gray-800 flex items-left bg-gray-100">
      <span className="mr-2 text-lg"><BsCalendar2EventFill /></span>
      <span className="text-lg">Events</span>
    </a>
  </li>
  <li className="mb-2 font-poppins">
    <a href="/inventory" className="btn-wide text-gray-800 flex items-left bg-gray-100">
      <span className="mr-2 text-lg"><MdInventory /></span>
      <span className="text-lg">Inventory</span>
    </a>
  </li>
</ul>





</ul>

        {/* Image below the list */}
<div className="flex items-center justify-center">
  <img src="/sean.jpg" alt="Sean" className="w-24 rounded-full" />
</div>
<div className="text-center lg:text-center mt-4 mb-4">
  <h1 className="text-base font-bold font-poppins">Sean Elijah V. Chavez</h1>
  <p className="text-sm text-gray-500 font-poppins">sevchavez@addu.edu.ph</p>
  <p className="text-sm text-gray-500 font-poppins">Admin Associate</p>
</div>
<span className="flex items-center text-sm text-gray-500 font-poppins">
  <IoLogOut className="mr-2 text-lg text-gray-500" />
  Logout
</span>

    </div>
  </div>
  </div>
  

    
// <nav id="sidenav-1" className="absolute left-0 top-0 z-[1035] h-full w-96 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800" data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-position="absolute">
//   <main className="bg-white font-poppins flex">
//     <div className="container mx-auto px-8 py-12 flex flex-col items-center justify-start"> {/* Increased py-8 to py-12 */}
//       <div className="flex items-center justify-center p-4">
//         <img src="/ateneo.png" alt="Logo" className="w-32 h-32 rounded-full m-5 mb-10" /> {/* Increased w-25 h-25 to w-32 h-32 */}
//       </div>
//       <div className="flex flex-col items-start">
//         <ul className="list-none space-y-4">
//           <li>
//             <a href="/Dashboard" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 rounded-tl-lg rounded-tr-lg daisyui-btn"> {/* Increased py-2 to py-3 */}
//               <div className="flex items-center">
//                 <IoHome className="mr-2" />
//                 Dashboard
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/profile" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 daisyui-btn">
//               <div className="flex items-center">
//                 <IoPersonCircle className="mr-2" />
//                 Profile Management
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/events" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 daisyui-btn">
//               <div className="flex items-center">
//                 <BsCalendar2EventFill className="mr-2" />
//                 Events
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/inventory" className="flex items-center py-3 px-4 text-black hover:text-blue-600 border-2 border-gray-300 rounded-bl-lg rounded-br-lg daisyui-btn"> {/* Increased py-2 to py-3 */}
//               <div className="flex items-center">
//                 <MdInventory className="mr-2" />
//                 Inventory
//               </div>
//             </a>
//           </li>
//         </ul>
//         <div className="flex items-center mb-6 mt-14"> {/* Increased mb-4 to mb-6 and mt-10 to mt-14 */}
//             <img src="/ateneo.png" alt="Profile" className="w-12 h-12 rounded-full mr-2" /> {/* Increased w-10 h-10 to w-12 h-12 */}
//             <div>
//               <p className="text-base font-medium text-black">Sean Elijah Chavez</p> {/* Increased text-sm to text-base */}
//               <p className="text-sm text-black">sevchavez@addu.edu.ph</p> {/* Increased text-xs to text-sm */}
//               <p className="text-sm text-black">Super Admin</p> {/* Increased text-xs to text-sm */}
//             </div>
//           </div>
//           <button className="btn btn-warning">Warning</button>
//           {/* Logout Text */}
//           <a href="#" className="text-xs text-gray-500 padding">Logout</a>
//       </div>
//     </div>
//   </main>
// </nav>







  
  
  );
}

export default Navbar;