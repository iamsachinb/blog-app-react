import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams()
    const {blogs,pending,error} = useFetch("http://localhost:3000/blogs/" + id)
    const history = useHistory()
    const handleClick = ()=>{
       fetch("http://localhost:3000/blogs/" + blogs.id,{
        method : 'DELETE'
       }).then(()=>{
        history.push("/")
       })
    } 
    //useParams hook is used to destructure the elements present in the url
    //in the url we gave /blogs/:id 
    //we need that id to fetch the data so we use useParams hook to get that 
    return ( <div className="blog-details">

        {pending && <p>loading....</p>}
        {error && <div>{error}</div>}
        {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                <p>{blogs.body}</p>
                <button onClick={handleClick}>delete</button>

            </article>
        )}
    </div> );
}
 
export default BlogDetails;