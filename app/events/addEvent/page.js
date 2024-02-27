import Link from "next/link";
import Navbar from "../../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import EventAddForm from "../../../components/eventAddForm"; // Correct import with uppercase E

const AddEvent = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
       <EventAddForm /> {/* Correct usage with uppercase E */}
      </div> 
    </div>
  )
}

export default AddEvent;
