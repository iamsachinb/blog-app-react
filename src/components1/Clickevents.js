
const Clickevents = () => {
    const handleclick = (name,e)=>{
        console.log(`click ${name}`,e)
    }

    const handleclickevent = (e)=>{
        console.log(e)
    }
    //we can automatically get access to the event object
    return ( 
        <div className="home">
     
            <h2 >home page</h2>
            <button onClick={(e)=>handleclick("sachin",e)}>click me</button>
            <button onClick={handleclickevent}>click me event</button>
{/* 
            if u use handleclick() instead of handleclick then it will invoke
            the function automatically once browser is reloaded */}

            {/* but since here it is wrapped inside an anonymous funtion there is not the problem of it invoking automatically */}
        </div>
     );
}
 
export default Clickevents;