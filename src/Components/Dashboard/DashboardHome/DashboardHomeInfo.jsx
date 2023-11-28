
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const DashboardHomeInfo = ({ data,refetch }) => {
 
  const {
    _id,
    recipientName,
    recipientDistrict,
    recipientUpazila,
    donationDate,
    donationTime,
    donationStatus,
    donorEmail,
    donorName,
  } = data;
  const handleEdit = () => {
    // Handle redirection to the edit page (adjust the route accordingly)
    // Example: history.push(`/dashboard/edit-donation-request/${data.id}`);
    console.log("Edit donation request:", _id);
  };

  const handleDelete = () => {
    // Handle deletion (show confirmation modal, then delete the request)
    console.log("Delete donation request:", _id);
  };

  const handleViewDetails = () => {
    // Handle redirection to the details page (adjust the route accordingly)
    // Example: history.push(`/dashboard/donation-request-details/${data.id}`);
    console.log("View donation request details:", _id);
  };


  const handleDone = () =>{
    fetch(`http://localhost:5000/dashboard/donation-request/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        donationStatus: "Done",
        donorName: donorName, 
        donorEmail: donorEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  const handleCancel = () =>{
    fetch(`http://localhost:5000/dashboard/donation-request/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        donationStatus: "Canceled",
        donorName: donorName, 
        donorEmail: donorEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Canceled",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }



  return (
    <tr>
      <td>{recipientName}</td>
      <td>{recipientDistrict}</td>
      <td>{recipientUpazila}</td>

      <td>{donationDate}</td>
      <td>{donationTime}</td>
      <td>
        {donationStatus === "inprogress" ? (
          <div className="flex gap-1">
            <button onClick={handleDone} className="btn-sm bg-green-500 text-white">Done</button>
            <button onClick={handleCancel} className="btn-sm bg-[#ea062b] text-white">Cancel</button>
          </div>
        ) : (
          <td>{donationStatus}</td>
        )}
      </td>

      {/* <td>
          {isButtonsVisible ? (
            <div className="flex gap-1">
              <button
                className="btn-sm bg-green-500 text-white"
                onClick={() => {
                  setSelectedStatus("done");
                  handleConfirmDonation();
                }}
                disabled={!isButtonsVisible}
              >
                Done
              </button>
              <button
                className="btn-sm bg-[#ea062b] text-white"
                onClick={() => {
                  setSelectedStatus("canceled");
                  handleConfirmDonation();
                }}
                disabled={!isButtonsVisible}
              >
                Cancel
              </button>
            </div>
          ) : (
            <td>{donationStatus}</td>
          )}
        </td>
       */}

      <td>{donorName}</td>
      <td>{donorEmail}</td>
      <td
        onClick={handleEdit}
        className="bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
      >
        Edit
      </td>
      <td
        onClick={handleDelete}
        className="bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
      >
        Delete
      </td>
      <Link to={`/view_details/${_id}`}>
        <td
          onClick={handleViewDetails}
          className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
        >
          Details
        </td>
      </Link>
    </tr>
  );
};

export default DashboardHomeInfo;
