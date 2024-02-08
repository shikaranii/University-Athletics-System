import "daisyui/dist/full.css";

const HeroEvent = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-lg">
          <h1 className="mb-2 text-4xl sm:text-5xl font-bold text-black fontfamily-poppins">
            Events
          </h1>
          <p className="mb-2 sm:text-lg text-black font-semibold">
            Welcome, "Your Name Here"
          </p>
        </div>
      </div>
      <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box bg-gray-100 flex justify-center items-start">
          <div className="p-8 flex flex-col lg:flex-row lg:items-start space-y-8 lg:space-y-0 lg:space-x-8"> {/* Adjusted spacing here */}
            <a href="/Dashboard" className="block flex flex-col items-center"> {/* Added flex classes */}
              <img
                src="/createevent.png"
                className="w-24 rounded-lg shadow-sm mb-2 lg:mb-0 lg:mr-8 transition duration-300 transform hover:scale-105"
                alt="Create Event"
              />
              <h3 className="text-lg font-semibold">Create Sport Event</h3>
            </a>
            <div className="lg:hidden" style={{ width: "8px" }}></div> {/* Added gap for small screens */}
            <a href="/Dashboard" className="block flex flex-col items-center"> {/* Added flex classes */}
              <img
                src="/editevent.png"
                className="w-24 rounded-lg shadow-sm mb-2 lg:mb-0 lg:mr-8 transition duration-300 transform hover:scale-105"
                alt="Create Event"
              />
              <h3 className="text-lg font-semibold">View Sport Event</h3>
            </a>
          </div>
          <div className="hero-content text-secondary-content bg-gray-100 p-8"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroEvent;
