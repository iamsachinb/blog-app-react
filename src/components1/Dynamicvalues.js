import './App.css';


// type div.content and press enter
function Dynamicvalues() {
  const content = "welcome to my blog"
  const likes = 50//converts to string
  const arr = [1,2,3]
  const link = "https://www.google.com"
  //cannot output objects and boolean 
  return (


    <div className="App">
      <div className="content">

        <p>{content}</p>
        <p>he liked {likes} times</p>
        <p>{arr}</p>
        <p>{5+45}</p>
        <a href={link}>google</a>
      </div>
      </div>
  );
}

export default Dynamicvalues;

// npx json-server --watch data/db.json --port 8000
//command to start a json  server 
