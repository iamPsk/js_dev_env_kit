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

mockRouter.get("/users/:id", (req, res) => {
 res.send(Users.filter(user => user.id == req.params.id));
});

mockRouter.delete("/users/:id", (req, res) => {
  let _index;
  Users.forEach((user, index) => {
    if (user.id == req.params.id) {
      _index = index;
      return
    }
  })
  try {
    Users.splice(_index, 1);
    res.sendStatus(200)
  } catch (error) {
    console.error(error);    
  }
  
})

mockRouter.post("/users", (req, res) => {
  try {
    Users.push(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.send(error)
  }
})

export { mockRouter };