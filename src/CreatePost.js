import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreatePost = () => {
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [body, setBody] = useState('');
   const [isPending, setIspending] = useState(false)
   const redirect = useHistory();
    
    const handlePost = (e) =>{
        e.preventDefault();
        const post = {title, author, body};

        setIspending(true);

        
        fetch("http://localhost:5555/posts", {
         method : 'POST',
         headers : {"Type-Content" : "application/json"},
         body: JSON.stringify(post)
        }) .then (()=>{
            console.log("Data added !");
            setIspending(false);
            redirect.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Post</h2>
          <form onSubmit={handlePost}>
            <label>Post title:</label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
            <label>Post body:</label>
            <textarea value={body} onChange={(e)=> setBody(e.target.value)} required></textarea>
            <label>Blog author</label>
            <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                <option value=""></option>
                <option value="Sam Z">Sam Z.</option>
                <option value="Ocho Deluxe">Ocho Deluxe</option>
            </select>
           { !isPending && <button>Add post</button>} 
           { isPending && <button disabled>Adding post...</button>} 
          </form>
        </div>
     );
}
 
export default CreatePost;