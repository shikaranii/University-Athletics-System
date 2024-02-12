import "daisyui/dist/full.css";


const HeroProfile = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-lg">
          <h1 className="mb-2 text-4xl sm:text-5xl font-bold text-black fontfamily-poppins">
            Profile Management
          </h1>
          <p className="mb-2 sm:text-lg text-black font-semibold">
            Welcome, "Your Name"
          </p>
        </div>
      </div>
      <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box bg-gray-100 flex justify-start items-start">
          <div className="p-8"> {/* Padding applied here */}
            <p className="mb-2 sm:text-lg text-black font-semibold">
              Notifications
            </p>
            <div className="flex flex-col lg:flex-row">
            <img
              src="/ateneo.png"
              className="max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-8"
            />
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Student Athlete</h3>
                <a href="/profile/studentprofile" className="btn btn-primary">Go to Student Profile</a>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Coaches</h3>
                <button className="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>
          </div>
          <div className="hero-content text-secondary-content bg-gray-100 p-8"></div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HeroProfile;
