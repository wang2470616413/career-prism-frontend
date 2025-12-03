import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/navbar";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  );
}

