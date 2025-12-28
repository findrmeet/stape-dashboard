import React, { useState } from "react";
import { Outlet } from "react-router";

const Layout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-black-solid text-primary-50 flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 shadow sm:px-6">
        <h1 className="text-lg font-semibold sm:text-xl">My App</h1>

        {/* Desktop Nav */}
        <nav className="hidden space-x-4 text-sm sm:flex">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">About</button>
          <button className="hover:underline">Profile</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-gray-700 px-3 py-1 text-sm sm:hidden"
        >
          Menu
        </button>
      </header>

      {/* Mobile Nav */}
      {open && (
        <div className="space-y-2 border-b border-gray-800 px-4 py-3 text-sm sm:hidden">
          <button className="block w-full text-left">Home</button>
          <button className="block w-full text-left">About</button>
          <button className="block w-full text-left">Profile</button>
        </div>
      )}

      {/* Main Area */}
      <div className="flex flex-1 flex-col gap-4 p-4 sm:grid sm:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="hidden rounded-2xl p-4 shadow sm:block">
          <ul className="space-y-2 text-sm">
            <li className="font-medium">Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
            <li>Logs</li>
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 rounded-2xl shadow sm:p-6">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 py-3 text-center text-xs sm:px-6">
        © 2025 Dummy App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
