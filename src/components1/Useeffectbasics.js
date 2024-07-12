import { useState,useEffect } from "react"
import BlogList from "./BlogList";

const Useeffectbasics = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]);

        const [name,setName] = useState("john")

        const handleDelete = (id) => {
            const newBlogs = blogs.filter((blog) => blog.id !== id);
            setBlogs(newBlogs);
          };

        useEffect(()=>{
            console.log("hello from useEffect without square brackets");
            console.log(blogs)
        })
        //this useEffect function doesnt return anything this runs for every refresh

        useEffect(()=>{
            console.log("hello from useEffect without square brackets");
            console.log(blogs)
        },[])

        //runs at the first time the page reloads after that it wont run 

        useEffect(()=>{
            console.log("hello from useEffect with conditions");
            console.log(name)
            
        },[name])

        //runs when name state alone is changeed
    
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All blogs" handleDelete = {handleDelete}/>
           <button onClick={()=>{setName("sachin")}}>change name</button>
           <p>{name}</p>
          
           
        </div>
     );
}
 
export default Useeffectbasics;