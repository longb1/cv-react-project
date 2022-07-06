import React from "react"

export default function ExperiencePreviewSection(props){
    const allExp=props.allExperiences

    const formattedExperiences = allExp.map(exp =>{
        return <li key={exp.id}>
            <p>{exp.companyName}</p>
            <p>{exp.position}</p>
            <p>{exp.summary}</p>
            <p>{exp.dateFrom} to {exp.dateUntil}</p>
        </li>;
    })

    return(
        <ul id="previewExperiences">
            {formattedExperiences}
        </ul>

    )
}