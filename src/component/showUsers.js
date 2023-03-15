import { drawUserCard } from "../component/drawUserCard.js";

export const showUsers=(users)=> {
  const app = document.getElementById("app");
  const container = document.createElement("div");
  container.id = "container";
  app.appendChild(container);

  users.forEach((user) => {
    drawUserCard(container, user);
  });
}