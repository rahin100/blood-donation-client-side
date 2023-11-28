/* eslint-disable react/prop-types */
const DashboardHomeInfo = ({ data }) => {
  const {
    _id,
    recipientName,
    recipientDistrict,
    recipientUpazila,
    donationDate,
    donationTime,
    donationStatus,
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
  return (
    <tr>
      <td>{recipientName}</td>
      <td>{recipientDistrict}</td>
      <td>{recipientUpazila}</td>

      <td>{donationDate}</td>
      <td>{donationTime}</td>
      <td>{donationStatus}</td>
      <td>{donationStatus}</td>
      <td>{donationStatus}</td>
      <td onClick={handleEdit} className="bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer">Edit</td>
      <td onClick={handleDelete} className="bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer">Delete</td>
      {/* {donationStatus === "inprogress" && (
        <div>
          <button >Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )} */}
      <td onClick={handleViewDetails} className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white">View Details</td>
    </tr>
  );
};

export default DashboardHomeInfo;
