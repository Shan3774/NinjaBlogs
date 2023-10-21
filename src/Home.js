import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"Mario bought a car", author:"Balotelli", body:"What a car...", id:1},
        {title:"Such a great brother - Luigi", author:"Mario", body:"Brotherhood...", id:2},
        {title:"A name made popular", author:"Abebe", body:"Abebe beso bela... egr yblana", id:3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => {
                return(
                <div className="blogPreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </div>
                )
            })}
        </div>
     );
}
 
export default Home;