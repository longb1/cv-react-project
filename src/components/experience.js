import React from "react"

export default function Experience(props){

    // const [allWork, setAllWork]=React.useState(
    //     []
    // )

    // function changeWork(event) {
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    return(
        <form>
            <h2>Work Experience</h2>
            <input type="text" 
            name="companyName"
            placeholder="company"
            onChange={props.handleChange}
            value={props.cvTemplate.companyName}
            />
            <input type="text" 
            name="position"
            placeholder="position"
            onChange={props.handleChange}
            value={props.cvTemplate.position}
            />
            <input type="text" 
            name="summary"
            placeholder="summary"
            onChange={props.handleChange}
            value={props.cvTemplate.summary}
            />
            <label htmlFor="dateFrom">work from</label>
            <input type="date" 
            name="dateFrom"
            placeholder="dateFrom"
            onChange={props.handleChange}
            value={props.cvTemplate.dateFrom}
            />
            <label htmlFor="dateUntil">work until</label>
            <input type="date" 
            name="dateUntil"
            placeholder="dateUntil"
            onChange={props.handleChange}
            value={props.cvTemplate.dateUntil}
            />
            <button>add</button>
        </form>
    )
}