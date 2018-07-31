export const AddAction=(localData)=>dispatch=> {
  fetch('/api/post', { 
    method: 'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(localData)
  })
}