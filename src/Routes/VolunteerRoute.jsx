/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useVolunteer from "../Hooks/useVolunteer";
import { useLocation, Navigate } from "react-router-dom";

const VolunteerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isVolunteer, isVolunteerLoading] = useVolunteer();
  const location = useLocation();

  if (loading || isVolunteerLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isVolunteer) {
    return children;
  }

  // Import Navigate from react-router-dom
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default VolunteerRoute;
