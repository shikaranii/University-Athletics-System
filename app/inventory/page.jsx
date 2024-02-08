import Link from "next/link";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Inventory = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-8">

        <Hero /> {/* Include Hero component */}
        
        <h2 className="text-2xl font-bold">Inventory</h2>
        <div className="flex mt-4">
          <div className="mr-8">
            <h3 className="text-lg font-semibold">View Overall Inventory</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
              View
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Borrowing</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
              Borrow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
