const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
app.use(cors());
app.use(express.json());
// const dbo = require("./db/conn");

// app.use(require("./routes/record"));
// app.use(require('./config/checkToken'));
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));








// -------------------------[Server]
app.listen(port, () => {
//   dbo.connectToServer((err) => {
//     if (err) console.error(err);
//   });

  console.log(`Currently Listening on Port ${port}`);
});
