import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">User Preferences</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" className="w-full border rounded p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" className="w-full border rounded p-2" />
          </div>
          <div>
            <label htmlFor="theme" className="block mb-1">Theme</label>
            <select id="theme" className="w-full border rounded p-2">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;