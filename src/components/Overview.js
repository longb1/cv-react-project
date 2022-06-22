import React from "react";

export default function Overview(){
    const [tasks, setTasks] = React.useState([])

    return(
        <form>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>

            <button>Submit</button>
        </form> 
    )
}