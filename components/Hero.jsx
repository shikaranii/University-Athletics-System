import "daisyui/dist/full.css";


const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-lg">
          <h1 className="mb-2 text-4xl sm:text-5xl font-bold text-black fontfamily-poppins">
            Dashboard
          </h1>
          <p className="mb-2 sm:text-lg text-black font-semibold">
            Welcome, "Your Name"
          </p>
          <button className="btn btn-black sm:btn-wide">Clicker</button>
        </div>
      </div>
      <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box bg-gray-100 flex justify-start items-start">
          <div className="p-8"> {/* Padding applied here */}
            <p className="mb-2 sm:text-lg text-black font-semibold">
              Notifications
            </p>
          </div>
          <div className="hero-content text-secondary-content bg-gray-100 p-8"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
