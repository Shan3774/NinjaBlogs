import { Link } from "react-router-dom"
const BlogsList = ({blogs, title}) => {

    return (
        <div className="blogsList">
            <h2>{title}</h2>
            {blogs.map((blog) => {
            return(
            <div className="blogPreview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </Link>
            </div>
            )
        })}
        </div>
    );
}
 
export default BlogsList;