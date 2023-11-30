require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const PORT = 3000;
const fruits = require("./models/fruits");
const fruitsController = require('./controllers/userController')
// ------requires

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use((req, res, next) => {
  console.log("--");
  next();
});
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
// ------middleware

// app.get('/',(req,res)=>{
//     res.send("<h1> This is the Root Page</h1>")
// }) 
app.get("/fruits", (req, res) => {
  res.render("Index", { fruits: fruits });
});
// ---> [Index]

// ------> {{Routes}}
app.get("/fruits/new", (req, res) => {
  res.render("New");
});
// ----> [New]

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body)
  res.redirect('/fruits')
});

// -----> [POST]
app.post('/fruits/', (req, res)=>{
  if(req.body.readyToEat === 'on'){ 
      req.body.readyToEat = true;
  } else { 
      req.body.readyToEat = false;
  }
  fruitsController.createFruit
});//

app.get("/fruits/:id", (req, res) => {
  res.render("Show", {
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});
// ---> [Show]

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
//-------server
