const CreatePost = () => {
    return ( 
        <div className="create">
            <h2>Add a new Post</h2>
          <form>
            <label>Post title:</label>
            <input type="text" required/>
            <label>Post body:</label>
            <textarea required></textarea>
            <label>Blog author</label>
            <select>
                <option value=""></option>
                <option value="Sam Z">Sam Z.</option>
                <option value="Ocho Deluxe">Ocho Deluxe</option>
            </select>
            <button>Add post</button>
          </form>
        </div>
     );
}
 
export default CreatePost;