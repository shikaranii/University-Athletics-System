'use client'
import React, { useCallback, useState, useEffect } from 'react';
import { Events } from '../src/types folder/types';
import { Sport } from '../src/types folder/types';
import { Student } from '../src/types folder/types';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const EventAddForm = () => {
  return (
<>
<section className="bg-gray-100 py-8">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Create Sport Event</h2>
   
  </div>
</section>

<section className="bg-gray-100 py-8">
  <div className="container mx-auto">
    <div className="flex space-x-4"> 
      <div className="flex flex-col space-y-4 w-1/2"> 
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Event Name*" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Sport" className="input input-bordered w-full max-w-xs" />
          <input type="email" placeholder="Category" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Academic Year" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Date" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-1 font-light">Players</h1> 
          <input type="text" placeholder="Player" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Player" className="input input-bordered w-full max-w-xs" />
          <input type="email" placeholder="Player" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Player" className="input input-bordered w-full max-w-xs" />
          <input type="text" placeholder="Player" className="input input-bordered w-full max-w-xs" />
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-1/2"> 
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Recently Added Events</h2>
      </div>
    </div>
    <button type="submit" className="btn btn-primary mt-4">Add Event</button> 
  </div>
</section>



</>

  );
};

export default EventAddForm;
