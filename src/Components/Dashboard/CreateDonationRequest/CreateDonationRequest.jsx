import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CreateDonationRequest = () => {
  const [all_districts, setAllDistricts] = useState([]);
  const [zilla, setAllZilla] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/all_districts")
      .then((res) => res.json())
      .then((data) => setAllDistricts(data));
  }, []);
  //   console.log(all_districts);

  useEffect(() => {
    fetch("http://localhost:5000/zilla")
      .then((res) => res.json())
      .then((data) => setAllZilla(data));
  }, []);
  //   console.log(zilla);

  const axiosSecure = useAxiosSecure()

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const requesterName = form.requesterName.value;
    const requesterEmail = form.requesterEmail.value;
    const recipientName = form.recipientName.value;
    const recipientDistrict = form.recipientDistrict.value;
    const recipientUpazila = form.recipientUpazila.value;
    const recipentBloodGroup = form.recipentBloodGroup.value;
    const fullAddress = form.fullAddress.value;
    const donationDate = form.donationDate.value;
    const donationTime = form.donationTime.value;
    const requestMessage = form.requestMessage.value;
    const hospitalName = form.hospitalName.value;

    console.log(
      requesterName,
      requesterEmail,
      recipientName,
      recipientDistrict,
      recipientUpazila,
      recipentBloodGroup,
      fullAddress,
      donationDate,
      donationTime,
      requestMessage,
      hospitalName
    );

    const donationRequestData = {
      requesterName: user.displayName,
      requesterEmail: user.email,
      recipientName: recipientName,
      recipientDistrict: recipientDistrict,
      recipientUpazila: recipientUpazila,
      recipentBloodGroup: recipentBloodGroup,
      hospitalName: hospitalName,
      fullAddress: fullAddress,
      donationDate: donationDate,
      donationTime: donationTime,
      requestMessage: requestMessage,
      donationStatus: "pending", // Default status
    };
    console.log(donationRequestData);

    axiosSecure.post('/dashboard/donation-request',donationRequestData).then((res)=>{
        if (res.data.insertedId) {
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
          }
    })

    

  };

  return (
    <div className="card flex-shrink-0 max-w-full shadow-2xl bg-base-100">
      <form onSubmit={handleRequestSubmit} className="card-body">
        {/* 1st row  */}
        <div className="lg:flex md:flex flex-row gap-5">
          {user?.displayName ? (
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Requester Name</span>
              </label>
              <input
                type="text"
                name="requesterName"
                defaultValue={user.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
          ) : (
            ""
          )}
          {user?.email ? (
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Requester Email</span>
              </label>
              <input
                type="email"
                name="requesterEmail"
                defaultValue={user.email}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* 2nd row  */}
        <div className="lg:flex md:flex flex-row gap-5">
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Recipent Name</span>
            </label>
            <input
              type="text"
              name="recipientName"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* district  */}
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">District</span>
            </label>
            <label className="input-group">
              <select
                name="recipientDistrict"
                className="select select-bordered w-full"
              >
                <option value="type">District</option>
                {all_districts?.map((singleDis) => (
                  <option value={singleDis.bn_name} key={singleDis.id}>
                    {singleDis.bn_name}
                  </option>
                ))}
                <option value="type"></option>
              </select>
            </label>
          </div>
        </div>

        {/* 2nd row */}
        <div className="lg:flex md:flex flex-row  gap-5">
          {/* upazila  */}
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Upazila</span>
            </label>
            <label className="input-group">
              <select
                name="recipientUpazila"
                className="select select-bordered w-full"
              >
                <option value="type">Upazila</option>
                {zilla.map((singleUpozila) => (
                  <option value={singleUpozila.bn_name} key={singleUpozila.id}>
                    {singleUpozila.bn_name}
                  </option>
                ))}
                <option value="type"></option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <label className="input-group">
              <select
                name="recipentBloodGroup"
                className="select select-bordered w-full"
              >
                <option value="type">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </label>
          </div>
        </div>
        {/* 3rd row  */}
        <div className="lg:flex md:flex flex-row  gap-5">
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Hospital name</span>
            </label>
            <input
              type="text"
              name="hospitalName"
              placeholder="Hospital Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Full address</span>
            </label>
            <input
              type="text"
              name="fullAddress"
              placeholder="Full Address"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* 4th row */}
        <div className="lg:flex md:flex flex-row  gap-5">
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Donation Date</span>
            </label>
            <input
              type="date"
              name="donationDate"
              placeholder="Donation Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Donation Time</span>
            </label>
            <input
              type="time"
              name="donationTime"
              placeholder="Donation Time"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* {5th row} */}
        <div className="form-control md:w-1/2 lg:ml-4">
          <label className="label">
            <span className="label-text">Requester Message</span>
          </label>
          <input
            type="text"
            name="requestMessage"
            placeholder="Message"
            className="textarea textarea-bordered textarea-lg w-full max-w-4xl mb-3 h-[145px]"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#ea062b] text-white">Request</button>
        </div>
      </form>
    </div>
  );
};

export default CreateDonationRequest;
