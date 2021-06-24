const express = require("express");
const mongoose = require("mongoose");
const app = express();

// console.log(mongoose);

//db is connected to mongo from the URL in keys.js
const db = require("./config/keys").mongoURI;

const questions = require("./routes/api/questions");

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Mongos a go go"))
	.catch((err) => console.log(err));

// specify port to listen on
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("You didn't forget to listen!"));

// test route => root returns string
app.get("/", (req, res) => res.send("this works"));

app.use("/api/questions", questions);
