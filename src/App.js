import React, { useState, useEffect } from 'react';
import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";
import FakeNameAPI from "./api/FakeNameapi";
export default function App() {
  const [ setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the fake name API
    const fetchData = async () => {
      try {
        const data = await FakeNameAPI.getUsers();
        setUserData(data.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
        {/* Modal */}
      </main>
    </div>
  );
}

