import React from "react"

export default function Experience(){

    const [work, setWork]=React.useState(
        {
            companyName:"",
            position:"",
            summary:"",
            dateFrom:"",
            dateUntil:""
        }
    )

    const [allWork, setAllWork]=React.useState(
        []
    )

    

    function changeWork(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

}