import React from "react";

export default function Preview(props) {
  

    return(
        <div id="preview">
            <div id="header">
                <h1>{props.cvTemplate.name}</h1>
                <h2>{props.cvTemplate.email}</h2>
                <h3>{props.cvTemplate.phone}</h3>
            </div>
        </div>
    )
}
