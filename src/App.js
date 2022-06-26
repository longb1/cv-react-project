import React from "react";
import Form from "./components/form.js";
import Preview from "./components/preview.js";

function App() {
    const [cvTemplate, setCvTemplate] = React.useState({
        name:"",
        email:"",
        phone:"",
        companyName:"",
        position:"",
        summary:"",
        dateFrom:"",
        dateUntil:""
    })

    function handleChangePersonal(event) {
        const {name, value}=event.target
        setCvTemplate(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return(
        <main>
            <Form cvTemplate={cvTemplate} handleChange={handleChangePersonal}/>
            <Preview cvTemplate={cvTemplate}/>
        </main>
    )
}

export default App;
