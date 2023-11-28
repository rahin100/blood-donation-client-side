import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Container from "../Container/Container";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  const navLink = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
            : isPending
            ? "pending"
            : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
        }
      >
        {/* other code */}
        Home
      </NavLink>

      <NavLink
        to={"/donation_requests"}
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
            : isPending
            ? "pending"
            : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
        }
      >
        {/* other code */}
        Donation Requests
      </NavLink>

      <NavLink
        to={"/blog"}
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
            : isPending
            ? "pending"
            : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
        }
      >
        {/* other code */}
        Blog
      </NavLink>

      {
        user?.email ? (
          ""
        ) : (<NavLink
          to={"/login"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
              : isPending
              ? "pending"
              : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
          }
        >
          {/* other code */}
          Log in
        </NavLink>)
      }
      <NavLink
        to={"/registration"}
        className={({ isActive, isPending }) =>
          isActive
            ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
            : isPending
            ? "pending"
            : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
        }
      >
        {/* other code */}
        Registration
      </NavLink>

      {user?.email ? (
        <>
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
                : isPending
                ? "pending"
                : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
            }
          >
            {/* other code */}
            Dashboard
          </NavLink>

          <NavLink
            to={"/funding"}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-red-500 text-white text-[16px] font-bold mr-3 p-2 rounded-lg"
                : isPending
                ? "pending"
                : "text-black text-[16px] font-bold mr-3 p-2 rounded-lg"
            }
          >
            {/* other code */}
            Funding
          </NavLink>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <Container>
      <div>
        <div className="navbar bg-[#fff] shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
            <Link to={"/"}>
              <img
                className="w-[230px]"
                src="https://svgur.com/i/106W.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 z-20 bg-[#fff]">
              {navLink}
            </ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-lg dropdown-content bg-white rounded-box h-[]"
                >
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src="https://i.ibb.co/s5zPXPr/accoung-img.jpg"
                        alt="User Avatar"
                      />
                    </div>
                  </label>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
