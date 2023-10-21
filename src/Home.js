import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"Mario bought a car", author:"Mario", body:"What a car...", id:1},
        {title:"Such a great brother - Luigi", author:"Mario", body:"Brotherhood...", id:2},
        {title:"A name made popular", author:"Abebe", body:"Abebe beso bela... egr yblana", id:3}
    ])

    const [name, setName] = useState("Mario")

    useEffect(() => {
        console.log("Use effect ran.")
    }, [name])

    const handleDelete = (id) => {
        let newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title = "All Blogs" handleDelete = {handleDelete} />
            <button onClick={ () => { setName('Luigi') } } >Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;