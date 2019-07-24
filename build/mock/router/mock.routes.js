import express from "express";
import { Users } from "../model/mock.users";
const mockRouter = express.Router();

mockRouter.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.method, `\n${new Date().toTimeString()}`);
  next();  
})

mockRouter.get("/users", (req, res) => {
  res.json(Users);
});

export { mockRouter };