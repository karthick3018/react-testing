export const addTwoNumbers = (num1=0,num2=0) => {
  return num1+num2;
}

export const returnTheObject = () => {
  let objectValue= {id:3,name:'jhony'};
  return objectValue;
}

export const filterFunction = () => {
  let arrayValue = [{id:1,name:'karthick',id:2,name:'raja',id:3,name:'jhony',id:4,name:'hellen'}];
  arrayValue.filter(eachValue=>eachValue.id!==2)
  return arrayValue
}

const resolvedAfterSeconds = () => {
  return new Promise((resolve)=>{
    setTimeout(function() {
      resolve("resolved")
    }, 2000)
  })
}

export const asyncFunction = async()=>{
  let result = await resolvedAfterSeconds();
  return result
}
