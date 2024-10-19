import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Calendar from './components/Calendar';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold">Life Management App</span>
                </div>
                <div className="ml-6 flex space-x-8">
                  <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                  <Link to="/tasks" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Tasks</Link>
                  <Link to="/calendar" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Calendar</Link>
                  <Link to="/settings" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Settings</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;