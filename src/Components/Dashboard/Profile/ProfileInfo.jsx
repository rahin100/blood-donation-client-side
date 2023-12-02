import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


/* eslint-disable react/prop-types */
const ProfileInfo = ({ singleProfile,refetch }) => {
  const [all_districts, setAllDistricts] = useState([])
  const [zilla, setAllZilla] = useState([])
  const {user} = useContext(AuthContext)
  const {_id, name, email, district, upazila, bloodGroup, photo } = singleProfile;

  useEffect(()=>{
    fetch("https://blood-donation-server-side-three.vercel.app/all_districts")
    .then((res)=>res.json())
    .then((data)=>setAllDistricts(data))
  },[])
  console.log(all_districts)
  
  useEffect(()=>{
    fetch("https://blood-donation-server-side-three.vercel.app/zilla")
    .then((res)=>res.json())
    .then((data)=>setAllZilla(data))
  },[])
  console.log(zilla)
  



  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upazila = form.upazila.value;

    const updateInfo = {
      name: name,
      photo: photo,
      email: email,
      bloodGroup: bloodGroup,
      district: district,
      upazila: upazila,
    };
    
    console.log(updateInfo)

    fetch(`https://blood-donation-server-side-three.vercel.app/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch()
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

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Email: {email}.</p>
          <p>District: {district}.</p>
          <p>Upazila: {upazila}.</p>
          <p>Blood_Group: {bloodGroup}.</p>
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn bg-[#ea062b] text-white">
              Update Profile
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Update Info</h3>
                <div className="py-4">
                  <form onSubmit={handleUpdateProfile} className="card-body">
                    {/* 1st row  */}
                    {/* <div className="lg:flex md:flex flex-row gap-5"> */}
                      <div className="form-control md:w-1/2 lg:ml-4 lg:w-full">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control md:w-1/2 lg:ml-4 lg:w-full">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="photo URL"
                          className="input input-bordered"
                          required
                        />
                      </div>
                    {/* </div> */}
                    {/* 2nd row */}
                    {/* <div className="lg:flex md:flex flex-row  gap-5"> */}
                    {user?.email ? (
                        <div className="form-control md:w-1/2 lg:ml-4 lg:w-full">
                          <label className="label">
                            <span className="label-text">User Email</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="email"
                              name="userEmail"
                              defaultValue={user.email}
                              placeholder="email"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="form-control md:w-1/2 lg:ml-4 lg:w-full">
                        <label className="label">
                          <span className="label-text">Blood Group</span>
                        </label>
                        <label className="input-group">
                          <select
                            name="bloodGroup"
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
                    {/* </div> */}
                    {/* 3rd row  */}
                    {/* <div className="lg:flex md:flex flex-row  gap-5"> */}
                      {/* district  */}
                      <div className="form-control md:w-1/2 lg:ml-4 lg:w-full">
                        <label className="label">
                          <span className="label-text">District</span>
                        </label>
                        <label className="input-group">
                          <select
                            name="district"
                            className="select select-bordered w-full"
                          >
                            <option value="type">District</option>
                            {all_districts?.map((singleDis) => (
                              <option
                                value={singleDis.bn_name}
                                key={singleDis.id}
                              >
                                {singleDis.bn_name}
                              </option>
                            ))}
                            <option value="type"></option>
                          </select>
                        </label>
                      </div>
                      {/* upazila  */}
                      <div className="form-control md:w-1/2 lg:ml-4 lg:w-full">
                        <label className="label">
                          <span className="label-text">Upazila</span>
                        </label>
                        <label className="input-group">
                          <select
                            name="upazila"
                            className="select select-bordered w-full"
                          >
                            <option value="type">Upazila</option>
                            {zilla.map((singleUpozila) => (
                              <option
                                value={singleUpozila.bn_name}
                                key={singleUpozila.id}
                              >
                                {singleUpozila.bn_name}
                              </option>
                            ))}
                            <option value="type"></option>
                          </select>
                        </label>
                      </div>

                    <div className="form-control mt-6">
                      <input type="submit" value="Update Information" className="block w-full select-none rounded-lg bg-[#ea062b] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn" />
                    </div>
                  </form>
                </div>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
