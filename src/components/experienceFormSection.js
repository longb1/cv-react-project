import React from "react"

export default function ExperienceFormSection(props){

    return (
        <li key={props.allExp.id}>
            <p>{props.allExp.companyName}</p>
            <p>{props.allExp.position}</p>
            <p>{props.allExp.summary}</p>
            <p>{props.allExp.dateFrom} to {props.allExp.dateUntil}</p>
            <button /*onClick={deleteFunction} */>edit</button>
            <button>remove</button>
        </li>
    )
}