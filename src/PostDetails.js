import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const PostDetails = () => {
    const { id } = useParams();
    const { data: post, error, isPending } = useFetch('http://localhost:5555/posts/' + id);
    const redirect = useHistory();

    const handleDelete = () =>{
       fetch('http://localhost:5555/posts' + post.id, {
        method: 'DELETE'
       }).then(() => {
        redirect.push("/")
       })
    }

    return ( 
        <div className="post-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { post && (
               <article>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                    <div>{ post.body }</div>
                    <button onClick={handleDelete}>Delete</button>
               </article>
                
                )}
        </div>
     );
}
 
export default PostDetails;