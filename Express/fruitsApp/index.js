require("dotenv").config();
const express = require("express");
const app = express();
// const fruit = require('./models/fruits')
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Fruit = require("./models/fruit.js");
// ----------[MiddleWare]
app.set("view engine", "jsx");
// ---> This allows your ExpressApp to have a view on browser
app.engine("jsx", require("express-react-views").createEngine());
// ---> This instantiates the view engine& creates an instance of the view engine created above
app.use(express.urlencoded({ extended: false }));
// --> This parses incoming requests with urlencoded payloads and is based on a middleware called body-parser.
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
// -----> Instantiates Middleware to be executed during requestCycle.
mongoose.connect(
  "mongodb+srv://Jmwofford:longfella@cluster0.dcgklor.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// console.log(process.env)
// const db = mongoose.connect(process.env.MONGO_URI).then((con)=>{
//   console.log(con.connection)
//   console.log("databaseConnected")
// }).catch((e)=>{
// console.log(e)
// })
// --------------------------------[Routes]
// ----------> [Index]
app.get("/fruits", (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render("Index", {
      fruits: allFruits,
    });
  });
});

// -------------> [New]
app.get("/fruits/new", (req, res) => {
  res.render("New");
});

// -------------> [POST]
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
    //set to true
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
    //set to false
  }
  Fruit.create(req.body, (error, createdFruit) => {
    console.log("Somethings Wrong: ", error);
    res.send(createdFruit);
  });
});

app.get('/fruits/:id/edit', (req, res)=>{
  Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
    if(!err){
      res.render(
        'Edit',
      {
        fruit: foundFruit //pass in the found fruit so we can prefill the form
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  });
});


// ---------------->[PUT]
app.put('/fruits/:id', (req, res)=>{
  if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit)=>{
     console.log(updatedFruit)
      res.redirect(`/fruits/${req.params.id}`);
  });
});

// ----------------> [DELETE]
app.delete("/fruits/:id", (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/fruits"); //redirect back to fruits index
  });
});

// -----------------> [SEED]
app.get('/fruits/seed', (req, res)=>{
  Fruit.create([
      {
          name:'grapefruit',
          color:'pink',
          readyToEat:true
      },
      {
          name:'grape',
          color:'purple',
          readyToEat:false
      },
      {
          name:'avocado',
          color:'green',
          readyToEat:true
      }
  ], (err, data)=>{
      res.redirect('/fruits');
  })
});
// ----------> [Show]
app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render("Show", {
      fruit: foundFruit,
    });
  });
});

app.listen(3000, () => {
  console.log("listening on port3k");
});
