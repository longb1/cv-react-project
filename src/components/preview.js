import React from "react";

export default function Preview(props) {
  

    return(
        <div id="preview">
            <div id="header">
                <h1>{props.cvTemplate.personal.name}</h1>
                <h2>{props.cvTemplate.personal.email}</h2>
                <h3>{props.cvTemplate.personal.phone}</h3>
            </div>
            <div id="experience">
                <h2>{props.cvTemplate.experience.companyName}</h2>
                <h3>{props.cvTemplate.experience.position}</h3>
                <h4>{props.cvTemplate.experience.dateFrom} to {props.cvTemplate.experience.dateUntil}</h4>
                <p>{props.cvTemplate.experience.summary}</p>
            </div>
        </div>
    )
}
