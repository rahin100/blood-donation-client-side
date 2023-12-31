import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import DashboardHomeInfo from "./DashboardHomeInfo";
import { useNavigate } from "react-router-dom";
import useDonorCollection from "../../../Hooks/useDonorCollection";
import Container from "../../Container/Container";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [donor, refetch] = useDonorCollection();

  const handleViewAllRequests = () => {
    navigate("/dashboard/my-donation-requests");
  };

  return (
    <Container>
      <div>
        <h1 className="text-xl text-white bg-[#D2042D] text-center p-4">
          Welcome To your dashboard {user?.displayName}
        </h1>

        {donor.length > 0 && (
          <div>
            <h2 className="mt-[30px] text-xl text-[#D2042D]">
              Recent Donation Requests:
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-[50%] text-center">
                <thead>
                  <tr>
                    <th className="p-2 text-[12px]">Recipient Name</th>
                    <th className="p-2 text-[12px]">Recipient District</th>
                    <th className="p-2 text-[12px]">Recipient Upazila</th>
                    <th className="p-2 text-[12px]">Donation Date</th>
                    <th className="p-2 text-[12px]">Donation Time</th>
                    <th className="p-2 text-[12px]">Donation Status</th>
                    <th className="p-2 text-[12px]">Donor Name</th>
                    <th className="p-2 text-[12px]">Donor Email</th>
                    <th className="p-2 text-[12px]">Edit</th>
                    <th className="p-2 text-[12px]">Delete</th>
                    <th className="p-2 text-[12px]">View</th>
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
          <p className="text-[#D2042D] mt-4">
            You have no recent donation requests.
          </p>
        )}
      </div>
    </Container>
  );
};

export default DashboardHome;
