import React from "react";

export default function EditableForm(props) {
  

    return(
        <form onSubmit={props.handleEditFormSubmit}>
            <input type="text" 
            alt="experience"
            name="companyName"
            placeholder="company"
            onChange={props.handleEditFormChange}
            value={props.editFormDataOld.companyName}
            />
            <input type="text" 
            alt="experience"
            name="position"
            placeholder="position"
            onChange={props.handleEditFormChange}
            value={props.editFormDataOld.position}
            />
            <textarea
            alt="experience"
            name="summary"
            placeholder="summary"
            onChange={props.handleEditFormChange}
            value={props.editFormDataOld.summary}
            />
            <label htmlFor="dateFrom">work from</label>
            <input type="date" 
            alt="experience"
            name="dateFrom"
            placeholder="dateFrom"
            onChange={props.handleEditFormChange}
            value={props.editFormDataOld.dateFrom}
            />
            <label htmlFor="dateUntil">work until</label>
            <input type="date" 
            alt="experience"
            name="dateUntil"
            placeholder="dateUntil"
            onChange={props.handleEditFormChange}
            value={props.editFormDataOld.dateUntil}
            />
            <button>save</button>
            <button onClick={(event)=>props.handleCancel(event)}>cancel</button>
        </form>
    )
}

