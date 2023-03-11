import { drawCard } from "./drawUserCard.js"

export function showUsers(users){
  const container = document.getElementById("cintainer")
  for (const [index, user] of users.entries()){
    drawCard("card"+index, `https://robohash.org/${user.email}?gravatar=yes`, user.name, user.company.name,user.company.bs, user.phone, user.email, user.website )
  }
}