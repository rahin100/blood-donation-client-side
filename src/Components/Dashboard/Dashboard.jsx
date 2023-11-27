import { NavLink, Outlet } from "react-router-dom";
import Container from "../Container/Container";

const Dashboard = () => {
  return (
    <Container>
      <div className="flex gap-8">
        <div className="w-64 min-h-full bg-[#ea062b] text-white ">
          <ul className="menu p-4">
            <li className="text-xl font-semibold">
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
