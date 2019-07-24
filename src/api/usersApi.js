import "whatwg-fetch";
import baseUrl from "./baseUrl";
const baseUri = baseUrl();

export default function getUsers() {
  return _getUsers("users")
}

function _getUsers(route) {
  return window.fetch(baseUri + route)
    .then(data => data.json())
    .catch(error => console.error(error))
}