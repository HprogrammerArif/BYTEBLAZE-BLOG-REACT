import { useEffect } from "react";
import { useState } from "react";
import { deleteBlog, getBlogs } from "../utils/LocalStorage";
import BlogCard from "../components/BlogCard/BlogCard";
import EmptyState from "../components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs<1) {
    return <EmptyState address={'/blogs'} lable={'Go TO Blogs'} message={'No Bookmarks Abailable'}></EmptyState>
  }

  return (
    <div className="grid px-4 py-8 sm:px-8 lg:px-12 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deleteAble={true}
          blog={blog}
          key={blog.id}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
