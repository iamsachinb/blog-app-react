import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
     const [title, setTitle] = useState("")
     const [body,setBody] = useState("")
     const [author, setAuthor] = useState("mario")
     const [isPending, setisPending] = useState(false)
     const history = useHistory()
     
     const handleSubmit = (e)=>{
       e.preventDefault();//this prevents the page from refreshing once we click the submit button 
       const blog = {title,body,author}
       setisPending(true)
       fetch("http://localhost:8000/blogs",{
        method : "POST",
        headers : {"content-Type" : "application/json"},
        body : JSON.stringify(blog)
       }).then(()=>{
        console.log("blog added successfully")
        setisPending(false)
        //history.go(-1)
        //go back to previous page
        history.push('/')
        //go to the specific route
       })


    
              
     }
     return (
        
        <div className="create">
          

            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
                {console.log(title)}
                <label> Blog Content</label>
                <textarea type="text" value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
                <label> Blog author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
               
                {!isPending && <button>add blog</button>}
                {isPending && <button>adding......</button>}
            </form>
        </div>
     );
}

 
export default Create;