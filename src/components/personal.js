import React from "react"

export default function Personal(props){
    
    const [personal, setPersonal]=React.useState(
        {
            name:"",
            email:"",
            phone:""
        }
    )

    function changePersonal(event) {
        const {name, value}=event.target
        setPersonal(prevFormData => {
            return ([
                ...prevFormData,
                {
                    [name]: value
                }
            ]
            )
        })
    }

    return(
        <form>
            <input type="text" 
            name="name"
            placeholder="name"
            onChange={changePersonal}
            value={props.personal.name}
            />
            <input type="email" 
            name="email"
            placeholder="name"
            value={props.personal.email}
            />
            <input type="tel" 
            name="phone"
            placeholder="name"
            value={props.personal.phone}
            />
            <button>submit</button>
        </form>
    )
}