// components/Navbar.js
import Image from 'next/image';

const Navbar = () => {
    return (
      <nav>
         <main className="bg-white">
         <div className="container mx-auto px-4 flex items-center">
        <Image
          src="/ateneo.png"
          width={150}
          height={150}
          className="mr-4"
        />

      </div>
<div className="flex flex-col items-start" >
  <div className="flex flex-col items-start">
    <a href="/Dashboard" className="py-2 px-4 text-blue-500 hover:text-blue-600">Dashboard</a>
    <a href="/profile" className="py-2 px-4 text-blue-500 hover:text-blue-600">Profile Management</a>
    <a href="/events" className="py-2 px-4 text-blue-500 hover:text-blue-600">Events</a>
    <a href="/inventory" className="py-2 px-4 text-blue-500 hover:text-blue-600">Inventory</a>
  </div>
</div>

    </main>
      </nav>
    );
  }
  
  export default Navbar;
  