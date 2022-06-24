import React from "react"

export default function Education(){

    const [education, setEducation]=React.useState([
        {
            schoolName:"",
            subject:"",
            dateStart:""
        }
    ])

    function changeEducation(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
        <form>
            <input type="text" />
        </form>
    )
}