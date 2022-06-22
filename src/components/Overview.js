//renders the tasks components
import React from "react";

export default function Overview(props){
    
    const tasks = props.array
    const newPoop = tasks.map(item=>{
        return(
            <li>{item.value}</li>
        )
    })

    return(
        <ul>
            {newPoop}
        </ul>
    )
}