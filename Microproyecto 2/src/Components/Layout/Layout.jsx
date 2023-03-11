import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
  return (
    <main className="h-screen bg-black">
      <Navbar />
      <section className="" >
        <Outlet />
      </section>
  </main>
  );
}
