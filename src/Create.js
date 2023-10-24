import { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState();
    const [ body, setBody ] = useState();
    const [ author, setAuthor ] = useState('Mario');

    const blog = {
        title, body, author
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="createBlog">
          <h3>Add a new Blog</h3>
           <form onSubmit={ handleSubmit } >
                <label>Title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Body :</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                ></textarea>
                <label>Written By:</label>
                <select
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}
                >
                    <option value="Mario">Mario</option>
                    <option value="Abebe">Abebe</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
           </form>
        </div>
    );  
}
 
export default Create;