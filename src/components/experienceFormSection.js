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

    /*
    create function in app.js (probably)

    point to id, and delte it within the array

    everything will refresh and you won't get it no more

    for edit... will need a form

    form changes current values of the id

    save will save them

    cancel will not.
    */
    
    return(
        <ul id="formExperiences">
            {formattedExperiences}
        </ul>

    )
}