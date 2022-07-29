import React from "react"

export default function Education(props){

    return(
        <form>
            <h2>Education </h2>
            <input type="text" 
            alt="experience"
            name="institution"
            placeholder="institution"
            // onChange={props.handleChange}
            // value={props.cvTemplate.experience.companyName}
            />
            <input type="text" 
            alt="experience"
            name="subject"
            placeholder="subject"
            // onChange={props.handleChange}
            // value={props.cvTemplate.experience.position}
            />
            <input type="text" 
            alt="experience"
            name="subject"
            placeholder="subject"
            // onChange={props.handleChange}
            // value={props.cvTemplate.experience.position}
            />
            <textarea
            alt="experience"
            name="description"
            placeholder="description"
            // onChange={props.handleChange}
            // value={props.cvTemplate.experience.summary}
            />
            <label htmlFor="dateFrom">Start date</label>
            <input type="date" 
            alt="experience"
            name="dateFrom"
            placeholder="dateFrom"
            // onChange={props.handleChange}
            // value={props.cvTemplate.experience.dateFrom}
            />
            <label htmlFor="dateUntil">End date</label>
            <input type="date" 
            alt="experience"
            name="dateUntil"
            placeholder="dateUntil"
            // onChange={props.handleChange}
            // value={props.cvTemplate.experience.dateUntil}
            />
            <button>add</button>
        </form>
    )
}