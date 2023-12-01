/* eslint-disable react/prop-types */
const BlogInfo = ({ singleBlog }) => {
    const { title, photo, content } = singleBlog;
  
    return (
      <div className="bg-white overflow-hidden shadow-lg rounded-lg">
        <img
          src={photo}
          alt={title}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{content}</p>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogInfo;
  