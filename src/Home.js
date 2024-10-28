import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: posts, isPending, error } = useFetch('http://localhost:5555/posts')

//    const handleDelete  = (id) => {
//        const newPosts = posts.filter(post => post.id !== id);
//         setPosts(newPosts); 
//    }
    return ( 
        <div className="home">
            { error && <div> {error} </div>}
            { isPending && <div>Loading...</div>}
            { posts && <PostList posts={posts} title="All posts !"/>}
            {/*  <PostList posts={posts.filter((post)=> post.author === "Sam Z.")} title="Sam's posts !" />  */}
        </div>
     );
}
 
export default Home;