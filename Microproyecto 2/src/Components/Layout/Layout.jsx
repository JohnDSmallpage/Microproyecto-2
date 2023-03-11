import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
  return (
    <main className="bg-blue-400 h-full">
      <Navbar />
      <section className="body h-full " >
        <Outlet />
      </section>
  </main>
  );
}
