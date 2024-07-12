import { useState } from "react"
import BlogList from "./BlogList";

const Functionsasprops = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]);

        const handleDelete = (id) => {
            const newBlogs = blogs.filter((blog) => blog.id !== id);
            setBlogs(newBlogs);
          };
        
    
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All blogs" handleDelete = {handleDelete}/>
          
           
        </div>
     );
}
 
export default Functionsasprops;

//instead of doing the deletion in the component which reduces reusability we are deleting the data in the main page 
//then we are sending the dunction as props

//<button onClick={() => props.handleDelete(blog.id)}>delete</button>
//using it in the component 