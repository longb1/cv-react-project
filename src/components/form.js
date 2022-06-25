import React from "react";
import Personal from "./personal.js";

export default function Form(props) {
  

    return(
        <div id="form">
                <Personal cvTemplate={props.cvTemplate} handleChange={props.handleChangePersonal}/>
        </div>
    )
}

