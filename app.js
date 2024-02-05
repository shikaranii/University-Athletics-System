// App.js
import React from 'react';
import Sidebar from './sideBar';

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-200 p-6">
        <h1>Main Content</h1>
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default App;
