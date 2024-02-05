import Image from "next/image";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div>
   
   <h1 className="text-2xl font-bold text-white font-poppins">University Athletics Office</h1>
      {/* Other page content */}
         <Navbar />
    </div>
  );
}

export default Home;