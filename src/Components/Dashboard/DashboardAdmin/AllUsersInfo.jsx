/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const AllUsersInfo = ({ singleUser, refetch }) => {
  const { _id, name, photo, email, status, Role } = singleUser;

  const handleBlock = () => {
    fetch(`https://blood-donation-server-side-three.vercel.app/dashboard/all-users/${_id}`, {
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
  };

  const handleUnBlock = () => {
    fetch(`https://blood-donation-server-side-three.vercel.app/dashboard/all-users/${_id}`, {
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
  };

  const handleMakeVolunteer = () => {
    fetch(`https://blood-donation-server-side-three.vercel.app/dashboard/all-users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Role: "Volunteer",
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
  };

  const handleDonorToAdmin = () => {
    // Add a condition to check if the current role is "Donor"
    if (Role === "Donor") {
      fetch(`https://blood-donation-server-side-three.vercel.app/dashboard/all-users/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Role: "Admin",
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
              title: `${name} as a Admin`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      // Display a message or handle the case where the role is not "Donor"
      console.log("Cannot perform Donor to Admin action. User is not a Donor.");
    }
  };

  const handleVolunteerToAdmin = () => {
    fetch(`https://blood-donation-server-side-three.vercel.app/dashboard/all-users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Role: "Admin",
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
            title: `${name} as a Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
        <button
          onClick={handleBlock}
          className="btn btn-sm btn-error text-white"
        >
          Block
        </button>
      </td>
      <td className="p-2">
        <button
          onClick={handleUnBlock}
          className="btn btn-sm btn-info text-white"
        >
          Unblock
        </button>
      </td>
      <td className="p-2">
        <button
          onClick={handleMakeVolunteer}
          className="btn btn-sm btn-warning text-white"
        >
          Make Volunteer
        </button>
      </td>

      <td className="p-2">
        <select
          className="select select-bordered join-item btn btn-sm btn-success bg-green-700 text-white "
          onChange={(e) => {
            const selectedOption = e.target.value;
            if (selectedOption === "Donor to Admin") {
              handleDonorToAdmin();
            } else if (selectedOption === "Volunteer to Admin") {
              handleVolunteerToAdmin();
            }
          }}
        >
          <option disabled selected>
            Make Admin
          </option>
          <option>Donor to Admin</option>
          <option>Volunteer to Admin</option>
        </select>
      </td>
    </tr>
  );
};

export default AllUsersInfo;
