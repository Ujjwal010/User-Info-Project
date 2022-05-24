import React from "react"
import Popup from "reactjs-popup"
import './User.css'


function User(props){
   const [edit,setedit]=React.useState(
                                        {
                                          name:"",
                                          email:"",
                                          phone:"",
                                          website:""
                                        }
   )
  
   function change(event){
    setedit(prev=>{
        return{...prev,
               [event.target.name]:event.target.value}
    })
}


function handleOnSubmit(e){
  e.preventDefault();
  props.edits(props.id,edit);
}
  return(
    <div>
    <div className="user">
      <span className="text">{props.name}</span>
      <span className="text">{props.email}</span>
      <span className="text">{props.phone}</span>
      <span className="text">{props.website}</span>
      <span>
        <Popup trigger={
        <button className="btn1">edit</button>}>
          <div>
        <form onSubmit={handleOnSubmit}  className="pop-form">
          <div className="init">
            <p>Edit User </p>
            <input className="in"
                  type="text"
                  Placeholder="name"
                  onChange={change}
                  name="name"
                  value={edit.name}
            />
            <input className="in"
                  type="text"
                  Placeholder="email"
                  onChange={change}
                  name="email"
                  value={edit.email}
            />
            <input className="in"
                  type="text"
                  Placeholder="phone"
                  onChange={change}
                  name="phone"
                  value={edit.phone}
            />
            <input className="in"
                  type="text"
                  Placeholder="website"
                  onChange={change}
                  name="website"
                  value={edit.website}
            />
            <button className="btn" >Edit user</button>
            </div>
        </form>
        
        </div>
        </Popup>
        <button onClick={()=>props.delete(props.id)} className="btn2">delete</button>
      </span>
      </div>
      
    </div>
        )


}


export default User;
