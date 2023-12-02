/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetailsPageInfo = ({ singleViewDetails, refetch }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    requesterName,
    recipientName,
    recipientDistrict,
    recipientUpazila,
    donationDate,
    donationTime,
    donationStatus,
    recipentBloodGroup,
    hospitalName,
    fullAddress,
    requestMessage,
  } = singleViewDetails;

  const handleDonate = () => {
    fetch(`https://blood-donation-server-side-three.vercel.app/dashboard/donation-request/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        donationStatus: "inprogress",
        donorName: user?.displayName,
        donorEmail: user?.email
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
            title: "Donate Confirm",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="card bg-[#D2042D] text-white">
        <div className="card-body">
          <h2 className="card-title">Requester Name: {requesterName}</h2>
          <h2 className="card-title">Recipient Name: {recipientName}</h2>
          <p>District: {recipientDistrict}</p>
          <p>Upazilla: {recipientUpazila}</p>
          <p>Blood Group: {recipentBloodGroup}</p>
          <p>Hospital: {hospitalName}</p>
          <p>Address: {fullAddress}</p>
          <p>Donation Date: {donationDate}</p>
          <p>Donation Time: {donationTime}</p>
          <p>Requester Message: {requestMessage}</p>
          <p>Status: {donationStatus}</p>
          <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Donate
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <p className="py-4">
                  <form>
                    {user?.displayName ? (
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Donor Name</span>
                        </label>
                        <input
                          type="text"
                          name="donorName"
                          value={user?.displayName}
                          placeholder="name"
                          className="input input-bordered text-black"
                          readOnly
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    {user?.email ? (
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">Donor Email</span>
                        </label>
                        <input
                          type="email"
                          name="donorEmail"
                          value={user?.email}
                          placeholder="email"
                          className="input input-bordered text-black"
                          readOnly
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </form>
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      onClick={handleDonate}
                      className="btn bg-[#ea062b] text-white "
                    >
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPageInfo;
