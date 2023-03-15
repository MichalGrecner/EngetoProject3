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


export function drawUserCard(parent, user) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = "card" + user.id;
  parent.appendChild(card);

  const img = `https://robohash.org/${user.email}?gravatar=yes`;

  const textCard = 
  `<div class="textDiv">
    <img src="${img}" />
    <p>${nameIcon}${user.name}</p>
    <p>${companyIcon}${user.company.name}</p>
    <p>${positionIcon}${user.company.bs}</p>
    <p>${phoneIcon}${user.phone}</p>
    <p>${emailIcon}${user.email}</p>
    <p>${webIcon}www.${user.website}</p>
  </div>`;

  card.innerHTML = textCard;
}
