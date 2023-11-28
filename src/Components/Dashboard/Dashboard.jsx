import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    
      <div className="flex gap-8">
        <div className="w-64 min-h-full bg-[#ea062b] text-white ">
          <ul className="menu p-4">
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard">Home</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/my-donation-requests">My Donation Requests</NavLink>
            </li>
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/create-donation-request">Create Donation Request</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>

  );
};

export default Dashboard;
