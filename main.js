import "./style.css";
import { getUsers } from "./fetchUsers.js";
import { showUsers } from "./showUsers.js";
import { filterUsers } from "./filterUsers.js";

const app = document.getElementById("app");
const inputDIV = document.createElement("div");
inputDIV.id = "inputCont";
const input = document.createElement("input");
input.id = "input";

const btn = document.createElement("button");
btn.id = "btn";
btn.innerText = "Filter users by name";

app.appendChild(inputDIV);
inputDIV.appendChild(input);
inputDIV.appendChild(btn);

let users;
getUsers().then((res) => {
  users = res;
  showUsers(users);
});

//input subbmited either by clicking on button or pressing Enter
btn.addEventListener("click", () => {
  filterUsers(users);
});

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") filterUsers(users);
});
