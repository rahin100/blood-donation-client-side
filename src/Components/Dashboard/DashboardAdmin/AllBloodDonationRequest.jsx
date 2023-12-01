import { useState } from "react";
import AllBloodDonationRequestInfo from "./AllBloodDonationRequestInfo";
import useAllDonorCollection from "../../../Hooks/useAllDonorCollection";

const AllBloodDonationRequest = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentStatus, setCurrentStatus] = useState("all");
  const [allDonor, refetch] = useAllDonorCollection();

  const filteredDonor =
    currentStatus === "all"
      ? allDonor
      : allDonor.filter((item) => item.donationStatus === currentStatus);

  const totalPages = Math.ceil(filteredDonor.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDonorData = filteredDonor.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleStatusChange = (status) => {
    setCurrentStatus(status);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="mt-4 md:mt-8 lg:mt-12 text-xl lg:text-2xl text-[#ea062b] mb-4 lg:mb-8">
        Recent Donation Requests:
      </h2>

      <div className="flex flex-wrap mb-4 space-y-2 md:space-y-0 md:space-x-2">
      <button
          className={`btn ${
            currentStatus === "all" ? "btn-active" : ""
          } w-full md:w-auto`}
          onClick={() => handleStatusChange("all")}
        >
          All
        </button>
        <button
          className={`btn ${
            currentStatus === "pending" ? "btn-active" : ""
          } w-full md:w-auto`}
          onClick={() => handleStatusChange("pending")}
        >
          Pending
        </button>
        <button
          className={`btn ${
            currentStatus === "inprogress" ? "btn-active" : ""
          } w-full md:w-auto`}
          onClick={() => handleStatusChange("inprogress")}
        >
          In Progress
        </button>
        <button
          className={`btn  ${
            currentStatus === "Done" ? "btn-active" : ""
          } w-full md:w-auto`}
          onClick={() => handleStatusChange("Done")}
        >
          Done
        </button>
        <button
          className={`btn ${
            currentStatus === "Canceled" ? "btn-active" : ""
          } w-full md:w-auto`}
          onClick={() => handleStatusChange("Canceled")}
        >
          Canceled
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[50%] text-center">
        <thead>
            <tr>
              <th className="p-2 text-[12px]">Requester Name</th>
              <th className="p-2 text-[12px]">Requester Email</th>
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
            {currentDonorData.map((data) => (
              <AllBloodDonationRequestInfo
                key={data._id}
                data={data}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="join mt-4">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`join-item btn ${
              currentPage === page ? "btn-active" : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllBloodDonationRequest;


