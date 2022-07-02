import React from "react"

export default function ExperienceFormSection(props){
    const allExp=props.allExperiences
    /*
    take all experiences

    map it, generate a list item

    append to <ul>
    
    insert into form.js as a component


    */

    const formattedExperiences = allExp.map(exp =>{
        return <li key={exp.id}>{exp.summary}</li>;
    })

    return(
        <ul>
            {formattedExperiences}
        </ul>

    )
}