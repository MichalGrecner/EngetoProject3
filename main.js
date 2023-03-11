import './style.css'
import { getUsers } from './fetchUsers.js'
import { showUsers } from './showUsers.js';




const app = document.getElementById("app")
const inputDIV = document.createElement("div")
inputDIV.id = "inputCont";
const input = document.createElement("input");
input.id = "input";

const btn = document.createElement("button");
btn.id = "btn";
btn.innerText="Filter results"


app.appendChild(inputDIV)
inputDIV.appendChild(input)
inputDIV.appendChild(btn)




const users =await getUsers();
showUsers(users)


btn.addEventListener("click", (() => {
  console.log(input.value)

   let filterObj= users.filter((item)=>item.name == input.value)

  //let filterObj= users.filter((item)=>Object.values(item) == input.value)
  
  console.log("The filtered objects are:", filterObj)

  //const filtered = users.filter(users.name == input.value)
  // let filtered =""
  // let result;
  // for (const user of users){
  //   const values = Object.values(user)
  //   filtered = values.filter( user => user.name == input.value)
  //   result = Object.fromEntries(filtered)
  // }
  
  // console.log(filtered)
  // console.log(result)
}) )






