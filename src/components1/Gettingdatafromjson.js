import { useState,useEffect } from "react"
import BlogList from "./BlogList";

const Gettingdatafromjson = () => {
    const [blogs, setBlogs] = useState(null);

        const [name,setName] = useState("john")

        // const handleDelete = (id) => {
        //     const newBlogs = blogs.filter((blog) => blog.id !== id);
        //     setBlogs(newBlogs);
        //   };

          //res is an object that iss returned by fetch
          //data is the result returned by res.json() which returns a json object

        useEffect(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res =>{
                return res.json()
            })
            .then((data)=>{
              //console.log(data)
              setBlogs(data)
            })
        },[])
        //dont forget this [] else what will happen is it will update state 
        //then that is a refresh trhen useEffect is triggered which will update the state again
        //this leads to infinite loop
        //to prevent that infinite loop use []

       
    
    return ( 
        <div className="home">
            {/* without this "blogs &&" it will show map cannot read properties of null error 
            what it means iss initially the state of the blogs is null  */}
           {blogs && <BlogList blogs={blogs} title="All blogs" />}
           <button onClick={()=>{setName("sachin")}}>change name</button>
           <p>{name}</p>
          
           
        </div>
     );
}
 
export default Gettingdatafromjson;