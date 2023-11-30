/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ContentManagementInfo = ({ singleBlog, refetch }) => {
  const { _id, title, photo } = singleBlog;

  const handlePublish = () => {
    fetch(`http://localhost:5000/dashboard/all-blogs/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blog_status: "published",
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
            title: `${title} Published`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleUnPublish = () => {
    fetch(`http://localhost:5000/dashboard/all-blogs/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blog_status: "draft",
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
            title: `${title} Published`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
 
  const handleUpdateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const content = form.content.value;
  
    const updateBlog = {
      title: title,
      photo: photo,
      content: content,
    };
  
    fetch(`http://localhost:5000/dashboard/all-blogs/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateBlog,
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
            title: "Blog edited", // Corrected string
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  

  const handleDeleteBlog = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/dashboard/all-blogs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your blog has been deleted.", "success");
            }
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
              <img src={photo} alt="Blog Thumbnail" />
            </div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{singleBlog.blog_status}</td>
      <td>
        <button onClick={handlePublish} className="btn btn-sm btn-primary">
          Publish
        </button>
      </td>
      <td>
        <button onClick={handleUnPublish} className="btn btn-sm btn-warning">
          Unpublish
        </button>
      </td>
      <td>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label htmlFor="my_modal_7" className="btn btn-sm btn-info">
            Edit
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Edit Blog</h3>
              <div className="py-4">
                <form onSubmit={handleUpdateBlog} className="card-body">
                    <div className="form-control md:w-1/2 lg:w-full">
                      <label className="label">
                        <span className="label-text">Title</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={title}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control md:w-1/2 lg:w-full">
                      <label className="label">
                        <span className="label-text">Thumbnail</span>
                      </label>
                      <input
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        placeholder="Thumbnail URL"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  <div className="form-control md:w-1/2 lg:w-full">
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
                    <input
                      type="submit"
                      value="Updated Blog"
                      className="block w-full select-none rounded-lg bg-[#ea062b] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn"
                    />
                  </div>
                </form>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </td>
      <td>
        <button onClick={handleDeleteBlog} className="btn btn-sm btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContentManagementInfo;
