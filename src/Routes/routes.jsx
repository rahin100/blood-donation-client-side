import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Components/Dashboard/Dashboard";
import Profile from "../Components/Dashboard/Profile/Profile";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import MyDonationRequest from "../Components/Dashboard/MyDonationRequest/MyDonationRequest";
import CreateDonationRequest from "../Components/Dashboard/CreateDonationRequest/createDonationRequest";
import SearchDonor from "../Pages/SearchDonor/searchDonor";
import BloodDonationRequest from "../Pages/BloodDonationRequest/BloodDonationRequest";
import ViewDetails from "../Pages/ViewDetailsPage/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateDonation from "../Pages/UpdateDonation/UpdateDonation";
import AdminHome from "../Components/Dashboard/DashboardAdmin/AdminHome";
import AllUsers from "../Components/Dashboard/DashboardAdmin/AllUsers";
import AllBloodDonationRequest from "../Components/Dashboard/DashboardAdmin/AllBloodDonationRequest";
import ContentManagement from "../Components/Dashboard/DashboardAdmin/ContentManagement";

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
        element: <BloodDonationRequest></BloodDonationRequest>,
      },
      {
        path: "view_details/:_id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: "search_donor",
        element: <SearchDonor></SearchDonor>
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
        path: "/dashboard/update-donation/:_id",
        element: <UpdateDonation></UpdateDonation>,
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
      // Admin routes 
      {
        path: "/dashboard/admin",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/all-blood-donation-requests",
        element:<AllBloodDonationRequest></AllBloodDonationRequest>
      },
      {
        path: "/dashboard/content-management",
        element: <ContentManagement></ContentManagement>,
      },
    ],
  },
]);

export default router;
