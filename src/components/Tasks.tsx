import React from 'react';

const Tasks: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Your To-Do List</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Complete project proposal</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Go for a 30-minute run</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Call mom</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Prepare presentation for next week</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;