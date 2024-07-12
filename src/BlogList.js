import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs
    const title = props.title
    //props is the object which receives all the data that is passed when we use the component\
    // /           <BlogList blogs={blogs}/>
    //here blogs={blogs} is the data that is being passed
    //doesnt change the existing array
    return ( 
        <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}> 
               <Link to={`/blogs/${blog.id}`}>
               <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>Written by {blog.author}</p>
               </Link>
                {/* <button onClick={() => props.handleDelete(blog.id)}>delete</button> */}
            </div>
          ))}

</div>
     );
}
 
export default BlogList;

// const BlogList = ({ blogs, title }) => {
//     return (
//     <div className="blog-list">
//     <h2>{title}</h2>
//     {blogs.map((blog) => (
//     <div className="blog-preview" key={blog.id}>
//     <h2>{ blog.title}</h2>
//     <p>Written by { blog.author }</p>
//     </div>
//     ))}
//     </div>
//     );
//     }
//     export default BlogList;

//like this also we can get data instead of using the props object
//we can desttructure the data