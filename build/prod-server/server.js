import express from "express";
import chalk from "chalk";
import open from "open";
import path from "path";
import compression from "compression";

const server = express();
const port = process.env.PORT || 3002;

server.use(express.static("dist"));
server.use(compression)

server.use("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../dist/index.html")
  )
});

server.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(chalk.green(`\nProd server listening on http://localhost:${port}\n`));
    open(`http://localhost:${port}`);
  }
});
