import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const { user, logOut } = useContext(authContext);

  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-black px-4 py-2 rounded"
              : "px-4 py-2 rounded hover:text-secondary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allVisas"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-black px-4 py-2 rounded"
              : "px-4 py-2 rounded hover:text-secondary"
          }
        >
          All Visas
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addVisa"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold px-4 py-2 rounded"
                  : "px-4 py-2 rounded hover:text-secondary"
              }
            >
              Add Visa
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/myAddedVisas"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold px-4 py-2 rounded"
                  : "px-4 py-2 rounded hover:text-secondary"
              }
            >
              My Added Visas
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/MyVisaApplications"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold px-4 py-2 rounded"
                  : "px-4 py-2 rounded hover:text-secondary"
              }
            >
              My Visa Applications
            </NavLink>
          </li>
        </>
      )}
      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold px-4 py-2 rounded"
                  : "px-4 py-2 rounded hover:text-secondary"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Register"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium px-4 py-2 rounded"
                  : "px-4 py-2 rounded hover:text-secondary"
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base"
          >
            {navlinks}
          </ul>
        </div>
        <a className="w-60">
          <img src={logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-base">{navlinks}</ul>
      </div>

      <div className="navbar-end">
        <div className="mr-8 mt-2">
          <ThemeToggle />
        </div>
        {user && (
          <div className="group relative inline-block">
            <img
              className="w-12 h-12 rounded-full object-cover cursor-pointer"
              src={user.photoURL}
              referrerPolicy="no-referrer"
              alt="Profile"
            />
            <div className="absolute z-[1000] right-0 mt-2 hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
              <div className="p-4">
                <p className="text-sm font-medium">{user.displayName}</p>
              </div>
              <hr />
              <div className="p-2">
                <button
                  className="w-full px-4 py-2 text-sm text-white bg-primary rounded hover:bg-secondary"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
