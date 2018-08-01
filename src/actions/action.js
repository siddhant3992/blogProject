export const AddAction=(localData)=>dispatch=> {
    dispatch({
    type:"ADD_POST",
    payload:new Promise((resolve,reject)=>{
      fetch('/api/post', { 
        method: 'POST',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(localData)
      }).then(resolve(localData))
    })
    })
}
export const UpdateAction=(localData)=>dispatch=> {
  dispatch({
  type:"EDIT_POST",
  payload:new Promise((resolve,reject)=>{
    fetch('/api/post/'+localData._id, { 
      method: 'PUT',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(localData)
    }).then(resolve(localData))
  })
  })
}
export const GetAction=()=>dispatch=> {
  dispatch({
  type:"GET_POST",
  payload:new Promise((resolve,reject)=>{
    fetch('/api/post')
      .then(response => response.json())
      .then(data =>resolve(data));
  })
  })
}
export const DeleteAction=(id)=>dispatch=> {
  dispatch({
  type:"DELETE_POST",
  payload:new Promise((resolve,reject)=>{
    fetch('/api/post/'+id, { 
      method: 'DELETE',
    }).then(response => response.json())
    .then(data =>resolve(data));
  })
  })
}