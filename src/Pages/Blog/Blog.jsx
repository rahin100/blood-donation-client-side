import { useState } from 'react';
import Container from '../../Components/Container/Container';
import useCollectAllBlog from '../../Hooks/useCollectAllBlog';
import BlogInfo from './BlogInfo';

const Blog = () => {
  const [allBlogs, refetch] = useCollectAllBlog();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs with 'published' status and match the search term
  const filteredBlogs = allBlogs?.filter(
    (blog) =>
      blog.blog_status === 'published' &&
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <div className="my-[50px] grid grid-cols-1 gap-7">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search blogs..."
            className="p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {filteredBlogs?.map((singleBlog) => (
          <BlogInfo key={singleBlog._id} singleBlog={singleBlog} refetch={refetch}></BlogInfo>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
