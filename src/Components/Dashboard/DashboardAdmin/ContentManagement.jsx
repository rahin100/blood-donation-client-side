import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCollectAllBlog from "../../../Hooks/useCollectAllBlog";
import ContentManagementInfo from "./ContentManagementInfo";
import Container from "../../Container/Container";

const ContentManagement = () => {
  const [allBlogs, refetch] = useCollectAllBlog();
  const axiosSecure = useAxiosSecure();
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

  const filteredBlogs =
    currentFilter === "all"
      ? allBlogs
      : allBlogs.filter(
          (blog) => blog.blog_status.toLowerCase() === currentFilter
        );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const content = form.content.value;

    const addBlog = {
      title,
      photo,
      content,
      blog_status: "draft",
    };

    axiosSecure.post("/dashboard/all-blogs", addBlog).then((res) => {
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Blog Added", // Changed "Blogs Added" to "Blog Added"
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <Container>
      <div>
        <h1 className="text-xl text-white bg-[#ea062b] text-center p-4">
          Add Blogs
        </h1>
        <div className="card flex-shrink-0 max-w-full bg-base-200">
          <form onSubmit={handleAddBlog} className="card-body">
            {/* 1st row  */}
            <div className="lg:flex md:flex flex-row gap-5">
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Thumbnail URL"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                name="content"
                placeholder="Content"
                className="textarea textarea-bordered textarea-lg w-full max-w-4xl mb-3 h-[145px]"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ea062b] text-white">Create</button>
            </div>
          </form>
        </div>

        <div className="mt-5 my-8">
          <h1 className="text-xl text-white bg-[#ea062b] text-center p-4">
            Manage Blogs
          </h1>
          <h1 className="text-xl text-[#ea062b] mt-[30px]">
            All Blogs: {allBlogs.length}
          </h1>

          <div className="flex flex-wrap mb-4 space-y-2 md:space-y-0 md:space-x-2 mt-5">
            <button
              className={`btn ${
                currentFilter === "all" && "btn-active"
              } w-full md:w-auto`}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={`btn ${
                currentFilter === "draft" && "btn-active"
              } w-full md:w-auto`}
              onClick={() => handleFilterChange("draft")}
            >
              Draft
            </button>
            <button
              className={`btn ${
                currentFilter === "published" && "btn-active"
              } w-full md:w-auto`}
              onClick={() => handleFilterChange("published")}
            >
              Published
            </button>
          </div>

          <div className="overflow-x-auto mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Publish</th>
                  <th>Unpublish</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentBlogs?.map((singleBlog) => (
                  <ContentManagementInfo
                    key={singleBlog._id}
                    singleBlog={singleBlog}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>

            <div className="join mt-4">
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  className={`join-item btn ${
                    currentPage === page && "btn-active"
                  }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContentManagement;
