const url = "https://jsonplaceholder.typicode.com/users";


export async function getUsers() {
  try{
    const response = await fetch(url);
    if(!response.ok) console.log("fetching users not ok")
    const users = await response.json();
    return users;
  }catch(err){
    console.log("fetching users not ok, error message: " + err)
  }
}




