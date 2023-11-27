import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationRequests from "../Pages/Donation_requests/DonationRequests";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Dashboard/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "donation_requests",
        element: <DonationRequests></DonationRequests>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
        loader:async () =>{
          const res = await fetch("http://localhost:5000/users")
          const data = await res.json()
          return data;
        }
        
      },
    ],
  },
]);

export default router;
