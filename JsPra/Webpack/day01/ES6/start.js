<<<<<<< HEAD
// start.js

// 引入 express
const express = require("express");
const path = require("path");

const app = express();

app.listen(8080, () => {
  console.log("Server Listening on 8080...");
});

app.use(express.static(path.resolve(__dirname, "./")));
=======
// start.js

// 引入 express
const express = require("express");
const path = require("path");

const app = express();

app.listen(8080, () => {
  console.log("Server Listening on 8080...");
});

app.use(express.static(path.resolve(__dirname, "./")));
>>>>>>> 5bdc84dd5ad320152935e4fedc4d67af63a9e326
