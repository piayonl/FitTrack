const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");

const PORT = 3090;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Fitness:Fitness@fitness.cywgq.mongodb.net/Fitness?retryWrites=true&w=majority",
  
{useNewUrlParser: true,
useFindAndModify: false,
});
// useUnifiedTopology: true 

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/console.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});