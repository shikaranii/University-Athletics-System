import Link from "next/link";
import Navbar from "../../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import EventAddForm from "../../../../components/EventAddForm";
// Capitalized component name

const AddEvent = () => { // Capitalized component name
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
       <EventAddForm /> {/* Capitalized component name */}
      </div> 
    </div>
  )
}

export default AddEvent; // Capitalized component name
