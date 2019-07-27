/*eslint-disable no-undef */
import { getUsers } from "./usersApi";
const assert = require("assert").strict

describe("#getUsers", () => {
  it("Should return an array of users", (done) => {
    getUsers().then(users => {
      const val = typeof users === typeof [] && users.length > 0;
      assert.equal(val, true, "getUsers does not return the expected value");
      done()
    })
  })
})