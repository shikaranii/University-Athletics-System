import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-white">
<div className="flex flex-col items-start" >
  <h1 className="text-2xl font-bold text-gray-800 font-poppins">University Athletics Office</h1>
  <div className="flex flex-col items-start">
    <a href="/Dashboard" className="py-2 px-4 text-blue-500 hover:text-blue-600">Dashboard</a>
    <a href="/profile" className="py-2 px-4 text-blue-500 hover:text-blue-600">Profile Management</a>
    <a href="/events" className="py-2 px-4 text-blue-500 hover:text-blue-600">Events</a>
    <a href="/inventory" className="py-2 px-4 text-blue-500 hover:text-blue-600">Inventory</a>
  </div>
</div>

    </main>
  );
}
