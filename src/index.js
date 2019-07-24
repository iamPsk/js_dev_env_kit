import "./styles/styles.css";
import { getUsers } from "./api/usersApi";
import { getUser } from "./api/usersApi";

const divComponent = () => {
  let element = document.createElement("div");
  element.setAttribute("id", "header");
  element.style.borderColor = "#f1f1f1";
  element.style.borderStyle = "solid";
  element.style.borderWidth = "thin";  
  element.style.margin = "1em";
  element.style.padding = "2em";
  element.style.width = "240px";
  element.style.height = "120px";
  return element;
}

getUsers().then(users => {
  console.log(users);
});


getUser(5).then(user => console.log(user));

document.body.appendChild(divComponent());