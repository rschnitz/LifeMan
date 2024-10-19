import React from 'react';

const Calendar: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Team meeting</span>
            <span className="text-gray-500">Tomorrow, 10 AM</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Dentist appointment</span>
            <span className="text-gray-500">Friday, 2 PM</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Movie night with friends</span>
            <span className="text-gray-500">Saturday, 7 PM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;