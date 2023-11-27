import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import DashboardHomeInfo from "./DashboardHomeInfo";
// import DashboardHomeInfo from "./DashboardHomeInfo";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
    const navigate = useNavigate();

  const [donationRequests, setDonationRequests] = useState([]);
  //   const [showAllRequests, setShowAllRequests] = useState(false);

  useEffect(() => {
    // Fetch the user's recent donation requests (adjust the API endpoint accordingly)
    fetch(`http://localhost:5000/dashboard/donation-request?requesterEmail=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setDonationRequests(data));
  }, []);

    const handleViewAllRequests = () => {
      navigate("/dashboard/my-donation-requests");
    };

  return (
    <div>
      <h1 className="text-xl text-white bg-[#ea062b] text-center p-4">
        Welcome To your dashboard {user?.displayName}
      </h1>
      <h2 className="mt-[30px] text-xl text-[#ea062b]">Donation Request: </h2>

      {donationRequests.length > 0 && (
        <div>
          <h2 className="mt-[30px] text-xl text-[#ea062b]">Recent Donation Requests:</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Recipient Name</th>
                  <th>Recipient District</th>
                  <th>Recipient Upazila</th>
                  <th>Donation Date</th>
                  <th>Donation Time</th>
                  <th>Donation Status</th>
                  <th>Donor Information</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {donationRequests.slice(0, 3).map((data) => (
                  <DashboardHomeInfo key={data._id} data={data}></DashboardHomeInfo>
                ))}
                
                <button onClick={handleViewAllRequests} className="btn bg-[#ea062b] text-[12px] text-white border-none hover:bg-black hover:text-white mt-[20px]">View All Requests</button>
                
              </tbody>
            </table>
          </div>
        </div>
      )}

      {donationRequests.length === 0 && (
        <p className="text-[#ea062b] mt-4">You have no recent donation requests.</p>
      )}
    </div>
  );
};

export default DashboardHome;