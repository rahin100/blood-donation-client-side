/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const AllUsersInfo = ({ singleUser,refetch }) => {
  const {_id, name, photo, email, status, Role } = singleUser;

  const handleBlock = () =>{
    fetch(`http://localhost:5000/dashboard/all-users/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Blocked",

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
            title: `${name} Blocked`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  const handleUnBlock = () =>{
    fetch(`http://localhost:5000/dashboard/all-users/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Active",

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
            title: `${name} Active`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  const handleMakeVolunteer = () =>{
    fetch(`http://localhost:5000/dashboard/all-users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Role: "Volunteer"

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
            title: `${name} as a Volunteer`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }
 




  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{Role}</td>
      <td>{status}</td>

      <td className="p-2">
        <td onClick={handleBlock} className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer">
          Block
        </td>
      </td>
      <td className="p-2">
        <td onClick={handleUnBlock} className="btn-sm bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer">
          Unblock
        </td>
      </td>
      <td className="p-2">
        <td onClick={handleMakeVolunteer} className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white rounded-2xl cursor-pointer">
         Make Volunteer
        </td>
      </td>
   
      <td className="p-2">
        <select className="select select-bordered join-item bg-[#ea062b] text-white border-none">
          <option disabled selected>
          Make Admin
          </option>
          <option>Donor</option>
          <option>Volunteer to Admin</option>
        </select>
      </td>
    </tr>
  );
};

export default AllUsersInfo;
