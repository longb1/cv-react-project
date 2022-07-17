import React, { Fragment } from "react";
import EditableForm from "./editableForm.js";
import Experience from "./experienceForm.js";
import ExperienceFormSection from "./experienceFormSection.js";
import Personal from "./personal.js";

export default function Form(props) {

    

    return(
        <div id="form">
            
            <ul id="formExperiences">
                {props.allExp.map((exp) =>{
                    return (
                    <Fragment>
                        {
                            props.editId === exp.id ?
                            <EditableForm
                                handleCancel={props.handleCancel}
                                handleSaveEdit={props.handleSaveEdit}
                            />
                            : 
                            <ExperienceFormSection 
                                allExp={exp} 
                                handleEdit={props.handleEdit}
                                handleRemove={props.handleRemove}
                            />
                        }
                    </Fragment>
                    )
                })}
            </ul>

            <Personal cvTemplate={props.cvTemplate} handleChange={props.handleChangePersonal}/>
            
            <Experience
                cvTemplate={props.cvTemplate} 
                handleChange={props.handleChangeExperience}
                handleSubmit={props.handleSubmitExperiences}/>
        
        </div>
    )
}

