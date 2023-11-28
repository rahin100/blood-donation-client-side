import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const DashboardHomeInfo = ({ data, refetch }) => {
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

  const handleDone = () => {
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
  };

  const handleCancel = () => {
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
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/dashboard/donation-request/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <tr>
      <td className="p-2">{recipientName}</td>
      <td className="p-2">{recipientDistrict}</td>
      <td className="p-2">{recipientUpazila}</td>
      <td className="p-2">{donationDate}</td>
      <td className="p-2">{donationTime}</td>
      <td className="p-2">
        {donationStatus === "inprogress" ? (
          <div className="flex gap-1">
            <button
              onClick={handleDone}
              className="btn-sm bg-green-500 text-white"
            >
              Done
            </button>
            <button
              onClick={handleCancel}
              className="btn-sm bg-[#ea062b] text-white"
            >
              Cancel
            </button>
          </div>
        ) : (
          <td>{donationStatus}</td>
        )}
      </td>

      <td className="p-2">{donorName}</td>
      <td className="p-2">{donorEmail}</td>
      <td className="p-2">
        <Link to={`/dashboard/update-donation/${_id}`}>
          <td
            
            className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
          >
            Edit
          </td>
        </Link>
      </td>
      <td className="p-2">
        <td
          onClick={handleDelete}
          className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
        >
          Delete
        </td>
      </td>
      <td className="p-2">
        <Link to={`/view_details/${_id}`}>
          <td
            
            className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
          >
            Details
          </td>
        </Link>
      </td>
    </tr>
  );
};

export default DashboardHomeInfo;
