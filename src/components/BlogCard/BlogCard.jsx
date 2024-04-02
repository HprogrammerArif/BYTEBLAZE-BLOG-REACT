import { Link } from "react-router-dom";
import placeholderimage from '../../assets/404.jpg'

const BlogCard = ({blog}) => {
  const {cover_image, title, published_at, description, id} = blog;
  //console.log(blog);
  return (
    <Link
      
      to={`/blog/${id}`}
      className="max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 group hover:no-underline focus:no-underline dark:bg-gray-50 dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500"
        src={cover_image || placeholderimage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600 dark:text-gray-600">
          {new Date(published_at).toLocaleDateString() }
        </span>
        <p>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
