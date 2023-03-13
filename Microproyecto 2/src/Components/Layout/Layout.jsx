import { Outlet } from "react-router-dom"
import { UserContextProvider } from "../../Context/userContext";
import { Navbar } from "../Navbar/Navbar";

export function Layout() {
  return (
    <main>
      <UserContextProvider>
      <Navbar />
      <section className=" bg-black h-[1000px] font-Lexend" >
        <Outlet />
      </section>
      </UserContextProvider>
  </main>
  );
}
