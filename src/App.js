import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  //js code goes here or in the return below within curly braces
  //you can't put objects and boolean values inside the curly braces though
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
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
