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
    const [editFormData, setEditFormData]=React.useState({
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
    // make changes to the array directly
    // if cancelled then put hte old details back

    function handleEdit(event, object){
        event.preventDefault();
        setEditID(object.id)

        const formValues ={
            companyName:object.companyName,
            position:object.position,
            summary:object.summary,
            dateFrom:object.dateFrom,
            dateUntil:object.dateUntil
        }

        setEditFormData(formValues)
    }

    function handleEditFormChange(event){
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName]=fieldValue

        setEditFormData(newFormData)
    }

    function handleEditFormSubmit(event){
        event.preventDefault();

        const editedExperience ={
            id:editId,
            companyName:editFormData.companyName,
            position:editFormData.position,
            summary:editFormData.summary,
            dateFrom:editFormData.dateFrom,
            dateUntil:editFormData.dateUntil
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
                handleEdit={handleEdit}
                handleEditFormChange={handleEditFormChange}
                handleEditFormSubmit={handleEditFormSubmit}
                handleRemove={handleRemove}
                handleCancel={handleCancel}
                allExp={allExp}
                editId={editId}
                editFormData={editFormData}
            />
            <Preview 
                cvTemplate={cvTemplate}
                allExperiences={allExp}
            />
        </main>
    )
}

export default App;
