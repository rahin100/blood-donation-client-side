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
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import MyDonationRequest from "../Components/Dashboard/MyDonationRequest/MyDonationRequest";
import CreateDonationRequest from "../Components/Dashboard/CreateDonationRequest/createDonationRequest";
import SearchDonor from "../Pages/SearchDonor/searchDonor";

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
        path: "search_donor",
        element: <SearchDonor></SearchDonor>
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
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/my-donation-requests",
        element: <MyDonationRequest></MyDonationRequest>,
      },
      {
        path: "/dashboard/create-donation-request",
        element: <CreateDonationRequest></CreateDonationRequest>,
      },
    ],
  },
]);

export default router;
