// components/Navbar.js
import Image from 'next/image';
import '../styles/globals.css'
const Navbar = () => {
  return (
    <nav>
      <main className="bg-white font-poppins">
        <div className="container mx-auto px-4 flex items-center justify-start">
          <Image
            src="/ateneo.png"
            width={150}
            height={150}
            className="mr-4"
            style={{ marginLeft: "-150px" }} // Adjust the left margin
          />
        </div>
        <div className="flex flex-col items-start">
          <ul className="list-none space-y-4"> {/* Apply space-y-4 class to ul element to add vertical gap */}
            <li>
              <a href="/Dashboard" className="flex items-center py-2 px-4 text-black hover:text-blue-600 relative">
                Dashboard
                {/* Highlight shape */}
                <div className="absolute top-0 left-0 w-full h-full bg-blue-200 opacity-50 rounded-full"></div>
              </a>
            </li>
            <li>
              <a href="/profile" className="py-2 px-4 text-black hover:text-blue-600">Profile Management</a>
            </li>
            <li>
              <a href="/events" className="py-2 px-4 text-black hover:text-blue-600">Events</a>
            </li>
            <li>
              <a href="/inventory" className="py-2 px-4 text-black hover:text-blue-600">Inventory</a>
            </li>
          </ul>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;