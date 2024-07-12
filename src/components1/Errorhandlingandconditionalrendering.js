import { useState,useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

        const [name,setName] = useState("john")
        const [pending,setpending] = useState(true)
        const [error,seterror] = useState(null)

        // const handleDelete = (id) => {
        //     const newBlogs = blogs.filter((blog) => blog.id !== id);
        //     setBlogs(newBlogs);
        //   };

          //res is an object that iss returned by fetch
          //data is the result returned by res.json() which returns a json object

        useEffect(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res =>{
                //runs only if it receives a response
                //if the api link is wrong
                //ex:http://localhost:8000/blogss this link will throw us an error 
                if(res.ok){
                    return res.json()

                }
                else{
                    seterror("could not fetch the data from that resource")
                }
            })
            .then((data)=>{
              //console.log(data)
              setBlogs(data)
              setpending(false)
            })
            .catch((e)=>{
                seterror(e.message)
            })
            //catching any error 
        },[])
        //dont forget this [] else what will happen is it will update state 
        //then that is a refresh trhen useEffect is triggered which will update the state again
        //this leads to infinite loop
        //to prevent that infinite loop use []

        // throw Error("could not fetch the data from that resource")
        //this is how we throw an error 
    
    return ( 
        <div className="home">
            {error  && <div>{error}</div>}
            {/* without this "blogs &&" it will show map cannot read properties of null error 
            what it means iss initially the state of the blogs is null  */}
            {pending && !error && <div>loading......</div>}
             {/* conditional rendering */}

           {blogs && <BlogList blogs={blogs} title="All blogs" />}
           {/* <button onClick={()=>{setName("sachin")}}>change name</button> */}
           {/* <p>{name}</p> */}
          
           
        </div>
     );
}
 
export default Home;