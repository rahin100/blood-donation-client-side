import { useState } from "react";
import useCollectUsers from "../../../Hooks/useCollectUsers";
import Container from "../../Container/Container";
import AllUsersInfo from "./AllUsersInfo";

const AllUsers = () => {
  const [allUsers, refetch] = useCollectUsers();
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("all");

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setCurrentPage(1);
  };

  const filteredUsers =
    currentFilter === "all"
      ? allUsers
      : allUsers.filter((user) => user.status.toLowerCase() === currentFilter);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  return (
    <Container>
      <div>
        <div>
          <h1 className="text-xl text-white bg-[#ea062b] text-center p-4">
            Manage All Users
          </h1>
        </div>

        <h1 className="text-xl text-[#ea062b] mt-[30px]">
          All Users: {allUsers.length}
        </h1>
        <div className="flex flex-wrap mb-4 space-y-2 md:space-y-0 md:space-x-2 mt-[30px]">
          <button
            className={`btn ${currentFilter === "all" && "btn-active"} w-full md:w-auto`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`btn ${currentFilter === "active" && "btn-active"} w-full md:w-auto`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`btn ${currentFilter === "blocked" && "btn-active"} w-full md:w-auto`}
            onClick={() => handleFilterChange("blocked")}
          >
            Blocked
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Block</th>
                <th>Unblock</th>
                <th>Make Volunteer</th>
                <th>Make Admin/Donor/Volunteer</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers?.map((singleUser) => (
                <AllUsersInfo
                  key={singleUser._id}
                  singleUser={singleUser}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>

          <div className="join mt-4">
            {pageNumbers.map((page) => (
              <button
                key={page}
                className={`join-item btn ${currentPage === page && "btn-active"}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllUsers;
