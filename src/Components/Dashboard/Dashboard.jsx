// Dashboard.js

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import Container from "../Container/Container";
import useVolunteer from "../../Hooks/useVolunteer";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="md:w-64 min-h-screen bg-[#ea062b] text-white">
        <ul className="menu p-4 space-y-2">
          {isAdmin ? (
            <>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard">Admin Home</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/all-users">All Users Page</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/all-blood-donation-requests">
                  All Blood Donation Requests
                </NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/content-management">
                  Content Management
                </NavLink>
              </li>
            </>
          ) : isVolunteer ? (
            <>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard">Volunteer Home</NavLink>
              </li>
              <li className="text-[14px] font-semibold">
                <NavLink to="/dashboard/all-blood-donation-requests">
                  All Blood Donation Requests
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
      <Container>
        <div className="flex-1">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
