import React from "react";
import Personal from "./components/personal.js";

function App() {
    const [cvTemplate, setCvTemplate] = React.useState({
            name:"",
            email:"",
            phone:""
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
            <div id="section1">
                <Personal cvTemplate={cvTemplate} handleChange={handleChangePersonal}/>
            </div>
            <div id="section2">
                <h1>{cvTemplate.name}</h1>
                <h2>{cvTemplate.email}</h2>
                <h3>{cvTemplate.phone}</h3>
            </div>
        </main>
    )
}

export default App;
