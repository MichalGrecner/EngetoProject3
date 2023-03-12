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
btn.innerText="Filter users by name"


app.appendChild(inputDIV)
inputDIV.appendChild(input)
inputDIV.appendChild(btn)

const users =await getUsers();
showUsers(users)


btn.addEventListener("click", (() => {
  const filterUsers= users.filter((user)=>user.name.toLowerCase().includes(input.value.toLowerCase()))
  const cont = document.getElementById("container")
  cont.remove()
  showUsers(filterUsers)
}) 
)






