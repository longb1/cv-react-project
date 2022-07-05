import React from "react"

export default function ExperienceFormSection(props){
    const allExp=props.allExperiences

    const formattedExperiences = allExp.map(exp =>{
        return <li key={exp.id}>
            <p>{exp.companyName}</p>
            <p>{exp.position}</p>
            <p>{exp.summary}</p>
            <p>{exp.dateFrom} to {exp.dateUntil}</p>
            <button /*onClick={deleteFunction} */>edit</button>
            <button>remove</button>
        </li>;
    })

    return(
        <ul id="formExperiences">
            {formattedExperiences}
        </ul>

    )
}