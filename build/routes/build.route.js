import express from "express";
import path from "path";

// console.log('ll');

const buildRouter = express.Router();

buildRouter.use(
  (req, res, next) => {
    console.log(Date(), req.method);
    next();
  }
);

buildRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../index.html")
  )
})

export { buildRouter };