import "whatwg-fetch";
import baseUrl from "./baseUrl";
const baseUri = baseUrl();

export function getUsers() {
  return _getUsers("users")
}

function _getUsers(route) {
  return window.fetch(baseUri + route)
    .then(onSuccess)
    .catch(onFailure)
}

export function getUser(id) {
  return window.fetch(baseUri + "users/" + id)
    .then(onSuccess)
    .catch(onFailure)
}

const onSuccess = (data) => data.json();
const onFailure = (err) => console.error(err);

