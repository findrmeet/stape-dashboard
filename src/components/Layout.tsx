import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-black-solid text-primary-50">
      {/* Header */}
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4  shadow">
        <h1 className="text-xl font-semibold">My App</h1>
        <nav className="space-x-4 text-sm">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">About</button>
          <button className="hover:underline">Profile</button>
        </nav>
      </header>

      {/* Main */}
      <div className="grid grid-cols-[240px_1fr] gap-4 p-4">
        {/* Sidebar */}
        {/* Sidebar */}
        <aside className=" rounded-2xl shadow p-4">
          <ul className="space-y-2 text-sm">
            <li className="font-medium">Dashboard</li>
            <li className="">Users</li>
            <li className="">Settings</li>
            <li className="">Logs</li>
          </ul>
        </aside>

        {/* Content */}
        {/* Content */}
        <main className=" rounded-2xl shadow p-6">{children}</main>
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="px-6 py-3 text-xs text-center border-gray-800  border-t">
        © 2025 Dummy App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
