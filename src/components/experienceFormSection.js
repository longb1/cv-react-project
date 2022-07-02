import React from "react"

export default function ExperienceFormSection(props){
    const allExp=props.allExperiences
    /*
    take all experiences

    loop through each one, generate a list item

    append to <ul> in a separate component
    
    insert into form.js


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