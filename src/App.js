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
    }

    const [editId, setEditID] = React.useState(null)

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

    const [editFormData, setEditFormData]=React.useState({
        companyName:"",
        position:"",
        summary:"",
        dateFrom:"",
        dateUntil:""
    })

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

    return(
        <main>
            <Form 
                cvTemplate={cvTemplate} 
                handleChangePersonal={handleChangePersonal}
                handleChangeExperience={handleChangeExperience}
                handleSubmitExperiences={handleSubmitExperiences}
                handleEdit={handleEdit}
                handleEditFormChange={handleEditFormChange}
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
