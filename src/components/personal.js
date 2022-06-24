import React from "react"

export default function Personal(props){
    
    return(
        <>
            <form>
                <input type="text" 
                name="name"
                placeholder="name"
                onChange={props.handleChange}
                value={props.cvTemplate.name}
                />
                <input type="email" 
                name="email"
                placeholder="name"
                onChange={props.handleChange}
                value={props.cvTemplate.email}
                />
                <input type="tel" 
                name="phone"
                placeholder="name"
                onChange={props.handleChange}
                value={props.cvTemplate.phone}
                />
                <button>submit</button>
            </form>
        </>
        
    )
}