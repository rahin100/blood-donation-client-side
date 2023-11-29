import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
const [isAdmin] = useAdmin()
  return (
    <div className="flex gap-5">
      <div className="w-64 min-h-full bg-[#ea062b] text-white ">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/admin">Admin Home</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/all-users">All Users Page</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/all-blood-donation-requests">
                  All Blood Donation Request
                </NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/content-management">
                  Content Management
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard">Donor Home</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/profile">Donor Profile</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/my-donation-requests">
                  My Donation Requests
                </NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/create-donation-request">
                  Create Donation Request
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
