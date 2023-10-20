import Navbar from './Navbar';
import Home from './Home';

function App() {
  //js code goes here or in the return below within curly braces
  //you can't put objects and boolean values inside the curly braces though
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
