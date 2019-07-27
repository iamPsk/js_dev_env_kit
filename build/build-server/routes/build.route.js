import express from "express";
import path from "path";

const buildRouter = express.Router();

buildRouter.use(
  (req, res, next) => {
    console.log(new Date().toTimeString(), req.method);
    next();
  }
);

buildRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../src/index.html")
  )
})

export { buildRouter };