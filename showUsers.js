import { drawUserCard } from "./drawUserCard.js";

export function showUsers(users) {
  const app = document.getElementById("app");
  const container = document.createElement("div");
  container.id = "container";
  app.appendChild(container);

  for (const [index, user] of users.entries()) {
    drawUserCard(
      index,
      `https://robohash.org/${user.email}?gravatar=yes`,
      user.name,
      user.company.name,
      user.company.bs,
      user.phone,
      user.email,
      user.website
    );
  }
}
