// pages/profile/page.js
import Link from "next/link";
import Navbar from "../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import InventoryAddForm from '../../components/InventoryAddForm';

const InventoryPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
        <InventoryAddForm />
      </div> 
    </div>

  );
};

export default InventoryPage;
