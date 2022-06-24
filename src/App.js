import React from "react";
import Education from "./components/Education.js";
import Personal from "./components/personal.js";
import Experience from "./components/Experience.js";

function App() {
  
    const [personal, setPersonal]=React.useState(
        {
            name:"",
            email:"",
            phone:""
        }
    )

    const [education, setEducation]=React.useState([
        {
            schoolName:"",
            subject:"",
            dateStart:""
        }
    ])

    const [work, setWork]=React.useState([
        {
            companyName:"",
            position:"",
            summary:"",
            dateFrom:"",
            dateUntil:""
        }
    ])

    return(
        <main>
            <Personal />
            <Education />
            <Experience />
        </main>
    )
}

export default App;
