/* eslint-disable no-undef */
import chalk from "chalk";
import jsdom from "jsdom";
import path from "path";
import fs from "fs";

const { JSDOM } = jsdom;
const assert = require("assert").strict;

before(() => {
  console.log(
    chalk.blue("\n----------Test suite tarted----------\n")
  );
});


describe("#index.html", () => {
  it("should have an h1 with development", (done) => {
    const dom = new JSDOM(fs.readFileSync(path.join(__dirname, "../src/index.html")), "utf-8");
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    assert.equal("Dev environment", h1.innerHTML, "h1 does not have the expected heading");
    done();
    dom.window.close();
  });
});
