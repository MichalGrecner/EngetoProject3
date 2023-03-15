import "./style.css";
import { fetchUsers } from "./src/utils/fetchUsers.js";
import { filterUsers } from "./src/utils/filterUsers.js";
import { showUsers } from "./src/component/showUsers.js";

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

//fetch users
let users;
fetchUsers().then((res) => {
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
