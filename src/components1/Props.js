const Props = (props) => {
    const blogs = props.blogs
    const title = props.title
    //props is the object which receives all the data that is passed when we use the component\
    // /           <BlogList blogs={blogs}/>




    //reusability of components
    // <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
    // in filter method we can write a function that can return true or false if it returns true then it will keep in the array
    //else it is removed from the array and then it will return the new array 
    //here blogs={blogs} is the data that is being passed

    return ( 
        <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>

                

                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>{blog.author}</p>
            </div>
          ))}

</div>
     );
}
 
export default Props;

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