import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem('blogs');
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs)
  }
  return blogs
}

//save
export const saveBlogs = (blog) => {
let blogs = getBlogs();
const isExist = blogs.find(b => b.id === blog.id);
if (isExist) {
  return toast.error('Already Bookmarkd!!')
}
blogs.push(blog);
localStorage.setItem('blogs', JSON.stringify(blogs))
toast.success('Blogs Bookmarked Sucessfully!')
}

//delete
export const deleteBlog = id => {
  let blogs = getBlogs();
  const remining = blogs.filter(b => b.id !== id)
  localStorage.setItem('blogs', JSON.stringify(remining))
  toast.success('Blog removed form bookmark sucessfully!!')
}