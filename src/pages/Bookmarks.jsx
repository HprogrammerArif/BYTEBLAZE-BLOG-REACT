const Bookmarks = () => {
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.slice(1, 19).map((blog) => (
        <BlogCard blog={blog} key={blog.id}></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
