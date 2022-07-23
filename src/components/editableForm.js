import React from "react";

export default function EditableForm(props) {
  

    return(
        <form onSubmit={props.handleEditFormSubmit}>
            <input type="text" 
            alt="experience"
            name="companyName"
            placeholder="company"
            onChange={props.handleEditFormChange}
            value={props.editFormData.companyName}
            />
            <input type="text" 
            alt="experience"
            name="position"
            placeholder="position"
            onChange={props.handleEditFormChange}
            value={props.editFormData.position}
            />
            <textarea
            alt="experience"
            name="summary"
            placeholder="summary"
            onChange={props.handleEditFormChange}
            value={props.editFormData.summary}
            />
            <label htmlFor="dateFrom">work from</label>
            <input type="date" 
            alt="experience"
            name="dateFrom"
            placeholder="dateFrom"
            onChange={props.handleEditFormChange}
            value={props.editFormData.dateFrom}
            />
            <label htmlFor="dateUntil">work until</label>
            <input type="date" 
            alt="experience"
            name="dateUntil"
            placeholder="dateUntil"
            onChange={props.handleEditFormChange}
            value={props.editFormData.dateUntil}
            />
            <button>save</button>
            <button onClick={(event)=>props.handleCancel(event)}>cancel</button>
        </form>
    )
}

