import "./styles/styles.css";
import getUsers from "./api/usersApi";

const component = () => {
  let element = document.createElement("div");

  element.innerHTML = "<h1>development kit</h1>"
  return element;
}

getUsers().then(users => console.log(users));

const square = i => i - i;
document.body.appendChild(component());

export { square };