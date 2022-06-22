import './App.css';
import React from "react";
import Overview from './components/Overview.js';

function App() {
  const [tasks, setTasks] = React.useState([])

  return (
    <div>
      <form>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>

        <button>Submit</button>
      </form>
    
    </div>
    
  );
}

export default App;
