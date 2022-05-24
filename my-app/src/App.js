import React from "react"
import './App.css'
import User from "./component/User.js"
import Add from "./component/Add"


function App(){
  const [usersdata, setuserdata] = React.useState([])
  


  React.useEffect(function(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => setuserdata(data))
     .catch((err)=>{console.log(err)})
  },[])

  
  let length=usersdata.length+1



function add(x){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    id:{length},
    name:x.name,
    email:x.email,
    phone:x.phone,
    website:x.website
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(data => {
    setuserdata((a)=>[...a,data]);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}





function remove(id){
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'DELETE',
}) 

}
  




function edits(id,edit){
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
                        id:id,
                        name:edit.name,
                        email:edit.email,
                        phone:edit.phone,
                        website:edit.website}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json)=>console.log(json))


}
  
  



  return(
    <div>
      <Add add={add}  />
    {usersdata.map(data=>(<User id={data.id} key={data.key} name={data.name} email={data.email} phone={data.phone} website={data.website} delete={remove} edits={edits}/>))}
      </div>
        )


}


export default App;
