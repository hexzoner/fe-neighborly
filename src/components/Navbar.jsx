import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { userInfo, logout } = useContext(AuthContext);
  // console.log("Navbar.jsx: userInfo: ", userInfo);
  document.querySelector("html").setAttribute("data-theme", "light");
  return (
    <header className="bg-yellow-700 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" href="index.html" className="btn btn-ghost text-xl text-white">
            Neighborly
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-4 font-semibold">
            <li>
              <NavLink to="/" href="index.html" className={({ isActive }) => (isActive ? "text-slate-200 text-2xl hover:underline hover:underline-offset-4" : "text-white text-2xl hover:underline hover:underline-offset-4")}>
                Home
              </NavLink>
            </li>
            {userInfo && (
              <li>

                <NavLink to="myposts" className={({ isActive }) => (isActive ? "underline " : "")}>
                  My Posts
                </NavLink>
              </li>
            )}

            {!userInfo && (
              <>
                <li>
                  <NavLink to="login" className={({ isActive }) => (isActive ? "text-slate-200 text-2xl hover:underline hover:underline-offset-4" :
                    "text-white text-2xl hover:underline hover:underline-offset-4")}>
                    Login
                  </NavLink>
                </li>
                <li>

                  <NavLink to="signup" className={({ isActive }) => (isActive ? "text-slate-200 text-2xl hover:underline hover:underline-offset-4" :
                    "text-white text-2xl hover:underline hover:underline-offset-4")}>
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
            {userInfo && (
              <button onClick={logout} className="">
                Logout
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header >
  );
}
