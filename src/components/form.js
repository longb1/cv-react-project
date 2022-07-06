import React from "react";
import Experience from "./experienceForm.js";
import ExperienceFormSection from "./experienceFormSection.js";
import Personal from "./personal.js";

export default function Form(props) {
  
    return(
        <div id="form">
            <Personal cvTemplate={props.cvTemplate} handleChange={props.handleChangePersonal}/>
            <ExperienceFormSection allExperiences={props.allExperiences} />
            <Experience
                cvTemplate={props.cvTemplate} 
                handleChange={props.handleChangeExperience}
                handleSubmit={props.handleSubmitExperience}/>
        
        </div>
    )
}

