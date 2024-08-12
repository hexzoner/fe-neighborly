import { NavLink } from "react-router-dom";

export default function Navbar() {
  document.querySelector("html").setAttribute("data-theme", "light");
  return (
    <header className="bg-base-100 text-base border-b-[1.5px] border-primary border-opacity-60">
      <div className="py-4 max-w-[60rem] m-auto">
        <div className="flex justify-between items-center font-semibold text-2xl flex-wrap gap-3">
          <NavLink to="/" href="index.html" className={({ isActive }) => (isActive ? "underline text-primary" : "")}>
            Home
          </NavLink>
          <NavLink to="myposts" className={({ isActive }) => (isActive ? "underline text-primary" : "")}>
            My Posts
          </NavLink>
          <NavLink to="login" className={({ isActive }) => (isActive ? "underline text-primary" : "")}>
            Login
          </NavLink>
          <button className="">Logout</button>
        </div>
      </div>
    </header>
  );
}
