import { Outlet } from "react-router-dom"
import { UserContextProvider } from "../../Context/userContext";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
  return (
    <main>
      <UserContextProvider>
      <Navbar />
      <section className=" bg-black h-[100vh]" >
        <Outlet />
      </section>
      </UserContextProvider>
  </main>
  );
}
