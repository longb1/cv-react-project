import React from "react"

export default function ExperienceFormSection(props){
    const allExp=props.allExperiences

    const formattedExperiences = allExp.map(exp =>{
        return <li key={exp.id}>{exp.summary}</li>;
    })

    return(
        <ul>
            {formattedExperiences}
        </ul>

    )
}