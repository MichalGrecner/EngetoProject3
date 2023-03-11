

function cardLine(parent, text, cls){
  const parentElement = document.getElementById(parent);
  const line = document.createElement("p");
  line.classList.add(cls);
  line.innerHTML = text;
  parentElement.appendChild(line)
}


export function drawCard(idElement, img, name, company, position, phone, email, web){
  const app = document.getElementById("app");
  const container = document.createElement("div");
  container.id = "container"
  app.appendChild(container)

  const card = document.createElement("div");
  card.classList.add("card")
  card.id = idElement;
  container.appendChild(card)

  const photo = document.createElement("img");
  photo.src = img
  card.appendChild(photo)

  cardLine(idElement, `name: ${name}`, "nameLine");
  cardLine(idElement, `company: ${company}`, "companyLine");
  cardLine(idElement, `position: ${position}`, "positionLine");
  cardLine(idElement, `phone: ${phone}`, "phoneLine");
  cardLine(idElement, `email: ${email}`, "emailLine");
  cardLine(idElement, `web: www.${web}`, "webLine");
}