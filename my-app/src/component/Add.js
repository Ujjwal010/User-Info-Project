import React from "react"

import './Add.css'

function Add(props){
    const [name,setname] =React.useState({
                                           name:"",
                                           email:"",
                                           phone:"",
                                           website:""
                                         })
    



    function change(event){
        setname(prev=>{
            return{...prev,
                   [event.target.name]:event.target.value}
        })
    }
    

    
    function handleOnSubmit(e){
        e.preventDefault();
        props.add(name);
    }
    return(
        <div>
        <form onSubmit={handleOnSubmit}  className="form">
            <input 
                  type="text"
                  Placeholder="name"
                  onChange={change}
                  name="name"
                  value={name.name}
            />
            <input 
                  type="text"
                  Placeholder="email"
                  onChange={change}
                  name="email"
                  value={name.email}
            />
            <input 
                  type="text"
                  Placeholder="phone"
                  onChange={change}
                  name="phone"
                  value={name.phone}
            />
            <input 
                  type="text"
                  Placeholder="website"
                  onChange={change}
                  name="website"
                  value={name.website}
            />
            <button className="btn" >Add user</button>
        </form>
        
        </div>
    )
}

export default Add