import { useState } from "react"

const Usestatehook = () => {
    //let name="sachin"
    const [name,setName] = useState("sachin");
    //useState is a function that returns two valuies
    //the current value of the variable and a function to change value
    const [count,setCount] = useState(0);
    const handleclick = (name)=>{
        //name = "kabi"
        //if u run this like this(using normal variables) the variable name will get updated
        //but that does not trigger react to re render the page
        //that is why the change is not showing on the browser
        //so we use a hook called useState
        setName("kabi");
        console.log(`click ${name}`)
    }
    const inc = () => {
        setCount((prevCount) => prevCount + 1);
      };
    
      const dec = () => {
        setCount((prevCount) => prevCount - 1);
      };

      //u cannot directly increment or decrement the value inside the setCount function
      //u have to do it via an anonymous function
  
    //we can automatically get access to the event object
    return ( 
        <div className="home">
     
            <h2 >home page</h2>
            <p>{name}</p>
            <button onClick={(e)=>handleclick("sachin",e)}>click me</button>
            <p>{count}</p>
            <button onClick={inc}>inc me</button>
            <button onClick={dec}>dec me</button>


            
           
            {/* if u use handleclick() instead of handleclick then it will invoke
            the function automatically once browser is reloaded */} 

            {/* but since here it is wrapped inside an anonymous funtion there is not the problem of it invoking automatically */}
        </div>
     );
}
 
export default Usestatehook;