/* eslint-disable no-undef */
import { square } from "./index";
import chalk from "chalk";

const assert = require("assert").strict;

before(() => {
  console.log(
    chalk.blue("\nTest suite tarted\n")
  );
});

describe("#square()", () => {
  it("should return the the parameter squared", (done) => {
    assert.equal(square(3), 0, "Expcted value not equal to the actual value")
    done();
  });
});