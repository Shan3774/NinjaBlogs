// import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
    const { data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    //notice the semi-colon on data:blogs means treat data in name of blogs for this context

    return ( 
        <div className="home">
            {isPending && <div>Loading ...</div> }
            {error && <div>{error}</div> }
            {blogs && <BlogsList blogs={blogs} title = "All Blogs" />}
        </div>
     );
}
 
export default Home;