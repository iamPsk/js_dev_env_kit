//eslint-disable-next-line no-unused-vars
import { getUser } from "./api/usersApi";

export class Tasks {
  constructor() {
    this.Tasks = []
    this.noOfTasks = 0;
  }
  addTask(task) {
    this.noOfTasks ++
    this.Tasks.push({
      id: this.noOfTasks,
      name: task,
      description: null,
      date: new Date(),
      completed: false
    })
    console.log(this.getTask(this.noOfTasks)[0]);
  }
  addDescription(id, description) {
    const task = this.getTask(id)[0];
    task["description"] = description;
    console.log("desciption added to Task");
    console.log(this.getTask(id));     
  }
  getTask(id) {
    return this.Tasks.filter((task) => task.id === id)
  }
  completeTask(id) {
    this.getTask(id)[0].completed = true;
    return this.getTask(id)[0];
  }
}