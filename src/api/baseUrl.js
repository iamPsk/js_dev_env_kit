export default function baseUrl() {
  const inDevelopment = window.location.hostname === "localhost" ?
    "http://localhost:3001/" : 
    "/";

  return inDevelopment;
}