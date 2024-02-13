import React from 'react';

const StudentAddForm = () => {
  return (
    <div className="flex flex-col space-y-4">
      <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
      <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Sport" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Year and Course" className="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Contact" className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default StudentAddForm;
