import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";



/* eslint-disable react/prop-types */
const AllBloodDonationRequestInfo = ({ data, refetch }) => {
  const [isAdmin] = useAdmin();
  const {
    _id,
    requesterName,
    requesterEmail,
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
      <td className="p-2 text-[12px]">{requesterName}</td>
      <td className="p-2 text-[12px]">{requesterEmail}</td>
      <td className="p-2 text-[12px]">{recipientName}</td>
      <td className="p-2 text-[12px]">{recipientDistrict}</td>
      <td className="p-2 text-[12px]">{recipientUpazila}</td>
      <td className="p-2 text-[12px]">{donationDate}</td>
      <td className="p-2 text-[12px]">{donationTime}</td>
      <td className="p-2 text-[12px]">
        {donationStatus === "inprogress" ? (
          <div className="">
            <button
              onClick={handleDone}
              className="btn-sm bg-green-500 text-white mb-1"
            >
              Donee
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

      <td className="p-2 text-[12px]">{donorName}</td>
      <td className="p-2 text-[12px]">{donorEmail}</td>
      <td className="p-2 text-[12px]">
        {
          isAdmin ? (
            <Link to={`/dashboard/update-donation/${_id}`}>
          <button
            className="btn btn-sm btn-primary"
          >
            Edit
          </button>
        </Link>
          ) : (
            <button disabled className="btn btn-sm btn-primary text-white"
          >
            Edit
          </button>
          )
        }
      </td>
      <td className="p-2 text-[12px]">
        {isAdmin ? (
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        ) : (
          <button disabled className="btn btn-sm">
            Delete
          </button>
        )}
      </td>
      <td className="p-2">
        <Link to={`/view_details/${_id}`}>
          <button
            className="btn btn-sm btn-warning text-white"
          >
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllBloodDonationRequestInfo;
