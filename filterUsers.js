import { showUsers } from "./showUsers.js";

export function filterUsers(users) {
  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input.value.toLowerCase())
  );
  const cont = document.getElementById("container");
  cont.remove();
  showUsers(filterUsers);
}
