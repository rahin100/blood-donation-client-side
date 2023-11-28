/* eslint-disable react/prop-types */
const MyDonationrequestInfo = ({ data}) => {
  const {
    recipientName,
    recipientDistrict,
    recipientUpazila,
    donationDate,
    donationTime,
    donationStatus,
    donorEmail,
    donorName,
  } = data;
  return (
    <tr>
      <td>{recipientName}</td>
      <td>{recipientDistrict}</td>
      <td>{recipientUpazila}</td>

      <td>{donationDate}</td>
      <td>{donationTime}</td>
      <td>{donationStatus}</td>
      <td>{donorName}</td>
      <td>{donorEmail}</td>
      
      {/* <td>
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
      </td> */}
      
      {/* <td>
        <Link to={`/dashboard/update-donation/${_id}`}>
          <td
            onClick={handleEdit}
            className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
          >
            Edit
          </td>
        </Link>
      </td>
      <td>
        <td
          onClick={handleDelete}
          className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
        >
          Delete
        </td>
      </td>
      <td>
        <Link to={`/view_details/${_id}`}>
          <td
            onClick={handleViewDetails}
            className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer"
          >
            Details
          </td>
        </Link>
      </td> */}
    </tr>
  );
};

export default MyDonationrequestInfo;
