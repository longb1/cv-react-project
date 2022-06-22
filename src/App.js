import React from "react";
import Overview from './components/Overview.js';

function App() {
  const [tasks, setTasks] = React.useState([])
  const [text, setText] = React.useState('')

  function handleSubmit(event){
    event.preventDefault()
    setTasks([...tasks, {
      id:tasks.length,
      value:text
    }])
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text"
                placeholder="enter task"
                onChange={e => setText(e.target.value)}
                value={text}
        /><br/>

        <button>Submit</button>
      </form>
      <Overview array={tasks} />
    
    </div>
    
  );
}

export default App;
