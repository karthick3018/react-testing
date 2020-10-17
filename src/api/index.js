
export const formReturnActualDataApi = async({name,age}=state)=>{
  return {
    data:{
      name,
      age:"25",
      ph:8192392323
    }
  }
}

export const getRequestApi = () =>{
  let response;
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(
    (result) => {
      response = result
    },
    (error) => {
      console.log('error occurred in get api',error)
    }
  )
  return response
}