/* eslint-disable react/prop-types */

const AllUsersInfo = ({singleUser}) => {
    // eslint-disable-next-line no-unused-vars
    const {name,photo,email,role,status} = singleUser
  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{status}</td>
      </tr>
    </div>
  );
};

export default AllUsersInfo;
