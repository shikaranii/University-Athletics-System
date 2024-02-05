import Image from "next/image";
import Navbar from "../components/Navbar";
import '../styles/globals.css'



const Home = () => {
  return (
   <div className="bg-white">
      <h1 className="text-2xl font-bold text-black font-poppins">University Athletics Office</h1>
      {/* Other page content */}
         <Navbar />
    </div>
  );
}

export default Home;