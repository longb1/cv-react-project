import React from "react"

export default function ExperiencePreviewSection(props){
    const allExp=props.allExperiences

    const formattedExperiences = allExp.map(exp =>{
        return <div className="previewExperiences">
            <h2>{exp.companyName}</h2>
            <h3>{exp.position}</h3>
            <h4>{exp.dateFrom} to {exp.dateUntil}</h4>
            <p>{exp.summary}</p>
        </div>;
    })

    return(
        <div id="previewExperienceSummary">
            {formattedExperiences}
        </div>

    )
}