import Link from "next/link";
import Navbar from "../../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import eventAddForm from "../../../components/eventAddForm";
// Capitalized component name

const AddEvent = () => { // Capitalized component name
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
       <eventAddForm /> {/* Capitalized component name */}
      </div> 
    </div>
  )
}

export default AddEvent; // Capitalized component name
