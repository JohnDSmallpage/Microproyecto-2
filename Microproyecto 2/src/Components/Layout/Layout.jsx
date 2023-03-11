import { Outlet } from "react-router-dom"
import { UserContextProvider } from "../../Context/userContext";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
  return (
    <main className="h-screen bg-black">
      <UserContextProvider>
      <Navbar />
      <section className="" >
        <Outlet />
      </section>
      </UserContextProvider>
  </main>
  );
}
