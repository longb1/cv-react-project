import React from "react";
import Overview from './components/Overview.js';

function App() {
  const [tasks, setTasks] = React.useState([])
  const [items, setItems] = React.useState({})

  function handleChange(event){
    //setTasks (map over it)
  }

  function handleSubmit(event){
    console.log(event.target.value)
    event.preventDefault()

    // setItems
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text"
                id="fname"
                name="fname"
                placeholder="entertask"
                onChange={handleChange}
        /><br/>

        <button>Submit</button>
      </form>
    
    </div>
    
  );
}

export default App;
