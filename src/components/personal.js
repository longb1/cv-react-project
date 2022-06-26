import React from "react"

export default function Personal(props){
    
    return(
        <>
            <form>
                <h2>Personal Details</h2>
                <input type="text" 
                alt="personal"
                name="name"
                placeholder="name"
                onChange={props.handleChange}
                value={props.cvTemplate.personal.name}
                />
                <input type="email" 
                alt="personal"
                name="email"
                placeholder="email"
                onChange={props.handleChange}
                value={props.cvTemplate.personal.email}
                />
                <input type="tel" 
                alt="personal"
                name="phone"
                placeholder="phone"
                onChange={props.handleChange}
                value={props.cvTemplate.personal.phone}
                />
            </form>
        </>
        
    )
}