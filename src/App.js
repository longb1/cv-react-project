import React from "react";
import Overview from './components/Overview.js';

function App() {
  const [tasks, setTasks] = React.useState([])

  function handleSubmit(event){
    const value = event.target
    event.preventDefault()

    setTasks(prevTasks => [
      ...prevTasks, value
    ])

    return <Overview tasks={tasks}/>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="fname">Add a task</label><br/>
        <input  type="text" 
                id="fname" 
                name="fname"
        /><br/>

        <button>Submit</button>
      </form>
    
    </div>
    
  );
}

export default App;
