const PostList = ({posts, title}) => {
    // const posts = props.posts;
    // const title = props.title;
    return ( 
        <div className="post-list">
        <h2>{ title }</h2>
         {posts.map( (post)=> (
            <div className="post-preview" key={post.id}> 
                <h2>{post.title}</h2>
                <p>Written by {post.author}</p>
            </div>
        ))}
        </div>
     );
}
 
export default PostList;