import Navbar from "@/components/shared/Navbar";

import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative ">
      <div className="lg:bg-red-500 md:bg-orange-500 sm:bg-yellow-500 bg-green-500 w-full h-2" />
      <Navbar />
      <div className="flex">
        <div className="flex min-h-screen flex-1 flex-col pt-24">
          <div className="mx-auto w-full">{children}</div>
        </div>
      </div>
      {/* Toaster */}
    </main>
  );
};

export default Layout;
