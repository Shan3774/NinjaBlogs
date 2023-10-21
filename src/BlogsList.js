const BlogsList = ({blogs, title, handleDelete}) => {

    return (
        <div className="blogsList">
            <h2>{title}</h2>
            {blogs.map((blog) => {
            return(
            <div className="blogPreview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written By: {blog.author}</p>
                <button className="deleteButton" onClick={() => { handleDelete(blog.id)} } >Delete</button>
            </div>
            )
        })}
        </div>
    );
}
 
export default BlogsList;