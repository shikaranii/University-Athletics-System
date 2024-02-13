import React from 'react';

const StudentAddForm = () => {
  return (
<>
<section className="bg-gray-100 py-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes Add Profile</h2>
    {/* Add your form or input fields here for adding student athletes */}
  </div>
</section>

<section className="bg-gray-100 py-8">
  <div className="container mx-auto">
    <div className="flex space-x-4">
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
        <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Sport" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Year and Course" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Contact" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Birthdate" className="input input-bordered w-full max-w-xs" />
        <input type="email" placeholder="Nationality" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Academic Year" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Weight in KG*" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Height in CM*" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Blood Type" className="input input-bordered w-full max-w-xs" />
        <input type="file" placeholder="Medical Certificate" className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  </div>
</section>

</>

  );
};

export default StudentAddForm;
