const nameIcon = `<span class="material-symbols-outlined">
person
</span>`;
const companyIcon = `<span class="material-symbols-outlined">
apartment
</span>`;
const positionIcon = `<span class="material-symbols-outlined">
badge
</span>`;
const phoneIcon = `<span class="material-symbols-outlined">
call
</span>`;
const emailIcon = `<span class="material-symbols-outlined">
mail
</span>`;
const webIcon = `<span class="material-symbols-outlined">
language
</span>`;

function cardLine(parent, text, cls) {
  const parentElement = document.getElementById(parent);
  const line = document.createElement("p");
  line.classList.add(cls);
  line.innerHTML = text;
  parentElement.appendChild(line);
}

export function drawUserCard(
  idIndex,
  img,
  name,
  company,
  position,
  phone,
  email,
  web
) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = "card" + idIndex;
  container.appendChild(card);

  const textDiv = document.createElement("div");
  textDiv.id = "textDiv" + idIndex;
  textDiv.classList.add("textDiv");

  const photo = document.createElement("img");
  photo.src = img;

  card.appendChild(photo);
  card.appendChild(textDiv);
  cardLine(textDiv.id, nameIcon + name, "nameLine");
  cardLine(textDiv.id, companyIcon + company, "companyLine");
  cardLine(textDiv.id, positionIcon + position, "positionLine");
  cardLine(textDiv.id, phoneIcon + phone, "phoneLine");
  cardLine(textDiv.id, emailIcon + email, "emailLine");
  cardLine(textDiv.id, `${webIcon}  www.${web}`, "webLine");
}
