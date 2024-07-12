//import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Create from "./Create"
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
// type div.content and press enter


//first wrap the app inside the Router component to ensure that it is available for the react router
function App() {
 
  return (

    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/create">
          <Create/>
          </Route>
          <Route path="/blogs/:id">
            {/* :id represents a varying parameterr */}
            <BlogDetails/>
         
          </Route>
          <Route path="*">
            {/* this means catch any other route */}
            <NotFound/>
          </Route>
          
        </Switch>

      </div>
      </div>
      </Router>
  );
}

export default App;

//switch component ensures that only one page is rendered at a time
//without a switch all the matches will be rendered 
//the nav bar which is outside the switch appears irrespective of the route
//keep the root page in the lowest 
//because we search for /create it matches with root directory / because /create has /
//so keep it in lower to avoid tht pronh as we find /create first then only we find root /
//or use exact to solve the problem



//but now the new problem is it is not working like react single page applicatipn
//it is working like traditional application
//because we are using <a href> tag instead of react link