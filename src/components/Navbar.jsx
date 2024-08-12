import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { userInfo, logout } = useContext(AuthContext);
  // console.log("Navbar.jsx: userInfo: ", userInfo);
  document.querySelector("html").setAttribute("data-theme", "light");
  return (
    <header className="bg-base-100 text-base border-b-[1.5px] border-primary border-opacity-60">
      <div className="py-4 max-w-[60rem] m-auto">
        <div className="flex justify-between items-center font-semibold text-2xl flex-wrap gap-3">
          <NavLink to="/" href="index.html" className={({ isActive }) => (isActive ? "underline " : "")}>
            Home
          </NavLink>
          {userInfo && (
            <NavLink to="myposts" className={({ isActive }) => (isActive ? "underline " : "")}>
              My Posts
            </NavLink>
          )}
          <div className="flex gap-6">
            {!userInfo && (
              <>
                <NavLink to="login" className={({ isActive }) => (isActive ? "underline " : "")}>
                  Login
                </NavLink>
                <NavLink to="signup" className={({ isActive }) => (isActive ? "underline " : "")}>
                  Sign Up
                </NavLink>
              </>
            )}
            {userInfo && (
              <button onClick={logout} className="">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
