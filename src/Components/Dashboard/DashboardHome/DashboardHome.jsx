import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import DashboardHomeInfo from "./DashboardHomeInfo";
import { useNavigate } from "react-router-dom";
import useDonorCollection from "../../../Hooks/useDonorCollection";
import Navbar from "../../Navbar/Navbar";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [donor, refetch] = useDonorCollection();

  const handleViewAllRequests = () => {
    navigate("/dashboard/my-donation-requests");
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-xl text-white bg-[#ea062b] text-center p-4">
        Welcome To your dashboard {user?.displayName}
      </h1>

      {donor.length > 0 && (
        <div>
          <h2 className="mt-[30px] text-xl text-[#ea062b]">
            Recent Donation Requests:
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="p-2">Recipient Name</th>
                  <th className="p-2">Recipient District</th>
                  <th className="p-2">Recipient Upazila</th>
                  <th className="p-2">Donation Date</th>
                  <th className="p-2">Donation Time</th>
                  <th className="p-2">Donation Status</th>
                  <th className="p-2">Donor Name</th>
                  <th className="p-2">Donor Email</th>
                  <th className="p-2">Edit</th>
                  <th className="p-2">Delete</th>
                  <th className="p-2">View</th>
                </tr>
              </thead>
              <tbody>
                {donor.slice(0, 3).map((data) => (
                  <DashboardHomeInfo
                    key={data._id}
                    data={data}
                    refetch={refetch}
                  ></DashboardHomeInfo>
                ))}

                <button
                  onClick={handleViewAllRequests}
                  className="btn bg-[#ea062b] text-[12px] text-white border-none hover:bg-black hover:text-white mt-[20px]"
                >
                  View All Requests
                </button>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {donor.length === 0 && (
        <p className="text-[#ea062b] mt-4">
          You have no recent donation requests.
        </p>
      )}
    </div>
  );
};

export default DashboardHome;
