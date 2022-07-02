import React from "react";
import Form from "./components/form.js";
import Preview from "./components/preview.js";
import uniqid from "uniqid";

function App() {
    const [cvTemplate, setCvTemplate] = React.useState({
        personal:{
            name:"",
            email:"",
            phone:""
        },
        experience:{
            companyName:"",
            position:"",
            summary:"",
            dateFrom:"",
            dateUntil:""
        }
    })

    function handleChangePersonal(event) {
        const {name, value}=event.target
        
        setCvTemplate(prevData => {
            return {
                ...prevData,
                personal:{
                    ...prevData.personal,
                    [name]: value
                }
            }
        })
    }

    function handleChangeExperience(event) {
        const {name, value}=event.target
        
        setCvTemplate(prevData => {
            return {
                ...prevData,
                experience:{
                    ...prevData.experience,
                    [name]: value
                }
            }
        })
    }

    const [currentExperience, setCurrentExperience]=React.setState({
        id:uniqid(),
        companyName:"",
        position:"",
        summary:"",
        dateFrom:"",
        dateUntil:""
    })
    const [allExp,setAllExp] = React.useState([])

    function handleSubmitExperiences(event){
        event.preventDefault()

        const currentInput = cvTemplate.experience

        setCurrentExperience({
            id:uniqid(),
            companyName:currentInput.companyName,
            position:currentInput.position,
            summary:currentInput.summary,
            dateFrom:currentInput.dateFrom,
            dateUntil:currentInput.dateUntil
        })


        setAllExp(
            (allExp) => {[
                ...allExp,
                currentExperience
            ]}
        )

    }

    return(
        <main>
            <Form 
                cvTemplate={cvTemplate} 
                handleChangePersonal={handleChangePersonal}
                handleChangeExperience={handleChangeExperience}
                handleSubmitExperience={handleSubmitExperiences}
                allExperiences={allExp}
            />
            <Preview cvTemplate={cvTemplate}/>
        </main>
    )
}

export default App;
