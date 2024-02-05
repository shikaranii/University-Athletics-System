// pages/profile/page.js
import Link from 'next/link';
import Navbar from '../../components/Navbar'; // Import Navbar component

const ProfilePage = () => {
  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <div className="flex">
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold">Profile Management</h2>
          <div className="flex mt-4">
            <div className="mr-8">
              <h3 className="text-lg font-semibold">Student Athlete</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 font-poppins">Edit Profile</button>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Faculty</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 font-poppins">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
