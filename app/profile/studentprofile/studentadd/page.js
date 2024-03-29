// pages/profile/page.js
import Link from "next/link";
import Navbar from "../../../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import StudentAddForm from "../../../../components/Student/StudentAddForm";


const StudentAdd = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
       <StudentAddForm />
      </div> 
    </div>
  )
}
export default StudentAdd;