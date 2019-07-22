import "whatwg-fetch";
import baseUrl from "./baseUrl";

export default function getUsers() {
  return _getUsers("users")
}

function _getUsers(route) {
  const baseUri = baseUrl(); // baseurl err

  console.log(`----\n${baseUri}\n---`);

  return window.fetch(baseUri + route)
    .then(data => data.json())
    .catch(error => console.error(error))
}