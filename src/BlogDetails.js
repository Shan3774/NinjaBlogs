import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    console.log(blog, isPending, error)
    return (
        <div className="blogDetails">
           {isPending && <p>Loading ...</p>}
           {error && <p>{error}</p>}
           {blog && <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
                    </article>
           }
        </div>
    );
}
 
export default BlogDetails;