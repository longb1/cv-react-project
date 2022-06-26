import React from "react";

export default function Preview(props) {
  

    return(
        <div id="preview">
            <div id="header">
                <h1>{props.cvTemplate.name}</h1>
                <h2>{props.cvTemplate.email}</h2>
                <h3>{props.cvTemplate.phone}</h3>
            </div>
            <div id="experience">
                <h2>{props.cvTemplate.companyName}</h2>
                <h3>{props.cvTemplate.position}</h3>
                <h4>{props.cvTemplate.dateFrom} to {props.cvTemplate.dateUntil}</h4>
                <p>{props.cvTemplate.summary}</p>
            </div>
        </div>
    )
}
