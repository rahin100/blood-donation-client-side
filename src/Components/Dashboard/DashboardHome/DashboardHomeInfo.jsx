/* eslint-disable react/prop-types */
const DashboardHomeInfo = ({ data }) => {
  const {
    recipientName,
    recipientDistrict,
    recipientUpazila,
    donationDate,
    donationTime,
    donationStatus,
  } = data;
//   const handleEdit = () => {
//     // Handle redirection to the edit page (adjust the route accordingly)
//     // Example: history.push(`/dashboard/edit-donation-request/${data.id}`);
//     console.log("Edit donation request:", _id);
//   };

//   const handleDelete = () => {
//     // Handle deletion (show confirmation modal, then delete the request)
//     console.log("Delete donation request:", _id);
//   };

//   const handleViewDetails = () => {
//     // Handle redirection to the details page (adjust the route accordingly)
//     // Example: history.push(`/dashboard/donation-request-details/${data.id}`);
//     console.log("View donation request details:", _id);
//   };
  return (
    <tr>
      <td>{recipientName}</td>
      <td>{recipientDistrict}</td>
      <td>{recipientUpazila}</td>

      <td>{donationDate}</td>
      <td>{donationTime}</td>
      <td>{donationStatus}</td>
    </tr>

    //     <div>
    //     <p>Recipient Name: {recipientName}</p>
    //     <p>Recipient Location: {`${recipientDistrict}, ${recipientUpazila}`}</p>
    //     <p>Donation Date: {donationDate}</p>
    //     <p>Donation Time: {donationTime}</p>
    //     <p>Donation Status: {donationStatus}</p>
    //     {donationStatus === 'inprogress' && (
    //       <div>
    //         <button onClick={handleEdit}>Edit</button>
    //         <button onClick={handleDelete}>Delete</button>
    //       </div>
    //     )}
    //     <button onClick={handleViewDetails}>View Details</button>
    //   </div>
  );
};

export default DashboardHomeInfo;
