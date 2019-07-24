export default function baseUrl() {
  return window.location.hostname === "localhost" ? "http://localhost:3001/" : "/";
}