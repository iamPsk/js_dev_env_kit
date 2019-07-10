import "./styles/styles.css";

const component = () => {
  let element = document.createElement("div");

  element.innerHTML = "<h1>development kit</h1>"

  return element;
}

const square = i => i - i;
document.body.appendChild(component());

export { square };