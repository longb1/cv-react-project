import React, { useDeferredValue } from "react";
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
        },
        education:{
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

    const [allExp,setAllExp] = React.useState([])

    function handleSubmitExperiences(event){
        event.preventDefault()

        const currentInput = cvTemplate.experience

        setAllExp(prevState => ([
                ...prevState,
                {
                    id:uniqid(),
                    companyName:currentInput.companyName,
                    position:currentInput.position,
                    summary:currentInput.summary,
                    dateFrom:currentInput.dateFrom,
                    dateUntil:currentInput.dateUntil
                }
            ])
        )

        setCvTemplate(prevData => {
            return {
                ...prevData,
                experience:{
                    companyName:"",
                    position:"",
                    summary:"",
                    dateFrom:"",
                    dateUntil:""
                }
            }
        })
    }

    const [editId, setEditID] = React.useState(null)
    const [editFormDataOld, setEditFormDataOld]=React.useState({
        companyName:"",
        position:"",
        summary:"",
        dateFrom:"",
        dateUntil:""
    })
    function handleCancel(event){
        event.preventDefault();
        setEditID(null)
    }

    function handleRemove(event, object){
        event.preventDefault();
        setAllExp(current =>
            current.filter(dontRemove =>{
                return dontRemove.id !== object.id;
            })
        )
    }

    // create an old details array
    // make changes to the allExp array directly
    // if cancelled then put hte old details back

    function handleEditExperience(event, object){
        event.preventDefault();
        setEditID(object.id)

        const formValues ={
            companyName:object.companyName,
            position:object.position,
            summary:object.summary,
            dateFrom:object.dateFrom,
            dateUntil:object.dateUntil
        }

        setEditFormDataOld(formValues)
    }

    function handleEditFormChange(event){
        event.preventDefault();

        const {fieldName, fieldValue}=event.target

        const editFormDataNew = {...editFormDataOld};
        editFormDataNew[fieldName]=fieldValue

        const index = allExp.findIndex((exp)=> exp.id ===editId)

        setAllExp(allExp[index]=editFormDataNew)
    }

    function handleEditFormSubmit(event){
        event.preventDefault();

        const editedExperience ={
            id:editId,
            companyName:editFormDataOld.companyName,
            position:editFormDataOld.position,
            summary:editFormDataOld.summary,
            dateFrom:editFormDataOld.dateFrom,
            dateUntil:editFormDataOld.dateUntil
        }

        const newExperiences = [...allExp];

        const index = allExp.findIndex((experience)=> experience.id === editedExperience.id)

        newExperiences[index]=editedExperience
        setAllExp(newExperiences)
        setEditID(null)
    }

    return(
        <main>
            <Form 
                cvTemplate={cvTemplate} 
                handleChangePersonal={handleChangePersonal}
                handleChangeExperience={handleChangeExperience}
                handleSubmitExperiences={handleSubmitExperiences}
                handleEdit={handleEditExperience}
                handleEditFormChange={handleEditFormChange}
                handleEditFormSubmit={handleEditFormSubmit}
                handleRemove={handleRemove}
                handleCancel={handleCancel}
                allExp={allExp}
                editId={editId}
                editFormDataOld={editFormDataOld}
            />
            <Preview 
                cvTemplate={cvTemplate}
                allExperiences={allExp}
            />
        </main>
    )
}

export default App;
