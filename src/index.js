import "./styles/styles.css";
import { getUsers } from "./api/usersApi";
import { getUser } from "./api/usersApi";

if (process.env.NODE_ENV !== "production") {
  console.log("Application started in Development mode");
} else {
  console.log("Application started in Production mode");
}

const divComponent = () => {
  let element = document.createElement("div");
  element.setAttribute("id", "header");
  return element;
}

getUsers().then(users => {
  console.log(users);
});


getUser(5).then(user => console.log(user));

document.body.appendChild(divComponent());