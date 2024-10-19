import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>
          <p>Welcome to your life management dashboard!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
          <ul className="list-disc list-inside">
            <li>Complete project proposal</li>
            <li>Go for a 30-minute run</li>
            <li>Call mom</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="list-disc list-inside">
            <li>Team meeting (Tomorrow, 10 AM)</li>
            <li>Dentist appointment (Friday, 2 PM)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;