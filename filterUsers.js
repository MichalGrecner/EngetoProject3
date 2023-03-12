import { showUsers } from './showUsers.js';
import { users } from './main.js';

export function filterUsers(){
  const filterUsers= users.filter((user)=>user.name.toLowerCase().includes(input.value.toLowerCase()))
  const cont = document.getElementById("container")
  cont.remove()
  showUsers(filterUsers)
}