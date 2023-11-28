import  { useState } from "react";
import useDonorCollection from "../../../Hooks/useDonorCollection";
import MyDonationrequestInfo from "./MyDonationrequestInfo";

const MyDonationRequest = () => {
  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1); 
  const [currentStatus, setCurrentStatus] = useState("all"); 
  const [donor, refetch] = useDonorCollection();

 
  const filteredDonor = currentStatus === "all" ? donor : donor.filter(item => item.donationStatus === currentStatus);

  
  const totalPages = Math.ceil(filteredDonor.length / itemsPerPage);

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDonorData = filteredDonor.slice(indexOfFirstItem, indexOfLastItem);

  
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
    <div>
      <h2 className="mt-[30px] text-xl text-[#ea062b] mb-[50px]">
        Recent Donation Requests:
      </h2>
      
      <div className="flex mb-4 space-x-4">
        <button
          className={`btn ${currentStatus === "all" ? "btn-active" : ""}`}
          onClick={() => handleStatusChange("all")}
        >
          All
        </button>
        <button
          className={`btn ${currentStatus === "pending" ? "btn-active" : ""}`}
          onClick={() => handleStatusChange("pending")}
        >
          Pending
        </button>
        <button
          className={`btn ${currentStatus === "inprogress" ? "btn-active" : ""}`}
          onClick={() => handleStatusChange("inprogress")}
        >
          In Progress
        </button>
        <button
          className={`btn ${currentStatus === "Done" ? "btn-active" : ""}`}
          onClick={() => handleStatusChange("Done")}
        >
          Done
        </button>
        <button
          className={`btn ${currentStatus === "Canceled" ? "btn-active" : ""}`}
          onClick={() => handleStatusChange("Canceled")}
        >
          Canceled
        </button>
      </div>
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
              <th>Donor Name</th>
              <th>Donor Email</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {currentDonorData.map((data) => (
              <MyDonationrequestInfo
                key={data._id}
                data={data}
                refetch={refetch}
              ></MyDonationrequestInfo>
            ))}
          </tbody>
        </table>
      </div>
      <div className="join">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`join-item btn ${currentPage === page ? "btn-active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyDonationRequest;
