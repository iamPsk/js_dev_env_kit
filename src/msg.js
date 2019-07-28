export default function message() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Application started in Development mode");
  } else {
    console.log("Application started in Production mode");
  }
}