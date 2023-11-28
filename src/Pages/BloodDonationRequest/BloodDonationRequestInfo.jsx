/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BloodDonationRequestInfo = ({singleBloodDonation}) => {
    const {_id,requesterName,recipientName,recipientDistrict,recipientUpazila,donationDate,donationTime,donationStatus} = singleBloodDonation
    return (
        <tr className="">
        <td>{requesterName}</td>
        <td>{recipientName}</td>
        <td>{recipientDistrict}</td>
        <td>{recipientUpazila}</td>
        <td>{donationDate}</td>
        <td>{donationTime}</td>
        <td>{donationStatus}</td>
        <Link to={`/view_details/${_id}`}>
        <td className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white">View Details</td>
        </Link>
      </tr>
    );
};

export default BloodDonationRequestInfo;