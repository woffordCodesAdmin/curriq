const express = require("express");

const app = express();
const Student = require("./models/student.js");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
// -----[Middleware]

app.get("/", (req, res) => {
  res.send("Welcome to Dashboard");
});
// --------[Root/Home]

app.get("/students", (req, res) => {
  Student.find({}, (err, allStudents) => {
    console.log(err);
    res.render("Index", {
      students: allStudents,
    });
  });
  // res.render('Index',{students: Students})
});
// --------[Index]


app.get("/students/new", (req, res) => {
  res.render("New", {});
});
// --------[New]

app.post("/students", (req, res) => {
  if (req.body.isPassing === "on") {
    req.body.isPassing = true;
  } else {
    req.body.isPassing = false;
  }
  Student.create(req.body, (err,createdStudent) => {
      console.log(err)
    res.send(createdStudent);
  });
  res.redirect("/students");
});
// --------[POST]

app.get("/students/:id/edit", (req, res) => {
  Student.findById(req.params.id, (err, foundStudent) => {
    //findStudent
    if (!err) {
      res.render("Edit", {
        student: foundStudent,
        //pass in the foundStudent so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
// -----------[EDIT]

app.put("/students/:id", (req, res) => {
  if (req.body.isPassing === "on") {
    req.body.isPassing = true;
  } else {
    req.body.isPassing = false;
  }
  Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
    console.log(updatedStudent);
    res.redirect(`/students/${req.params.id}`);
  });
});
// ---------[PUT/PATCH]

app.delete("/students/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/students");
  });
});
// ---------[DELETE]

app.get("/students/seed", (req, res) => {
  Student.create(
    [
      {
        name: "Michael",
        gpa: "4.0",
        isPassing: true,
      },
      {
        name: "Randy",
        gpa: "1.0",
        isPassing: false,
      },
      {
        name: "Tito",
        gpa: "3.4",
        isPassing: true,
      },
    ],
    (err, data) => {
      res.redirect("/students");
    }
  );
});
// ------[SEED -> DBTesting()]

app.get("/students/:id", (req, res) => {
    Student.findById(req.params.id, (err,foundStudent) => {
        console.log(err)
      console.log("Found: ", foundStudent);
      res.render("Show", {
        student: foundStudent,
      });
    });
  });
  // --------[SHOW]

app.listen("3000", () => {
  console.log("Listening on port3k");
});
