import React from "react"

export default function Experience(props){

    return(
        <form onSubmit={props.handleSubmit}>
            <h2>Work Experience</h2>
            <input type="text" 
            alt="experience"
            name="companyName"
            placeholder="company"
            onChange={props.handleChange}
            value={props.cvTemplate.experience.companyName}
            />
            <input type="text" 
            alt="experience"
            name="position"
            placeholder="position"
            onChange={props.handleChange}
            value={props.cvTemplate.experience.position}
            />
            <textarea
            alt="experience"
            name="summary"
            placeholder="summary"
            onChange={props.handleChange}
            value={props.cvTemplate.experience.summary}
            />
            <label htmlFor="dateFrom">work from</label>
            <input type="date" 
            alt="experience"
            name="dateFrom"
            placeholder="dateFrom"
            onChange={props.handleChange}
            value={props.cvTemplate.experience.dateFrom}
            />
            <label htmlFor="dateUntil">work until</label>
            <input type="date" 
            alt="experience"
            name="dateUntil"
            placeholder="dateUntil"
            onChange={props.handleChange}
            value={props.cvTemplate.experience.dateUntil}
            />
            <button>add</button>
        </form>
    )
}