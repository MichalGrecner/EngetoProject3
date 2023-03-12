import './style.css'
import { getUsers } from './fetchUsers.js'
import { showUsers } from './showUsers.js';
import { filterUsers } from './filterUsers.js';




const app = document.getElementById("app")
const inputDIV = document.createElement("div")
inputDIV.id = "inputCont";
const input = document.createElement("input");
input.id = "input";

const btn = document.createElement("button");
btn.id = "btn";
btn.innerText="Filter users by name"


app.appendChild(inputDIV)
inputDIV.appendChild(input)
inputDIV.appendChild(btn)

export const users =await getUsers();
showUsers(users)




//input subbmited either by clicking on button or pressing Enter
btn.addEventListener("click",filterUsers)
input.addEventListener("keypress",(e)=>{
  if(e.key=="Enter") filterUsers();
})











