const express = require("express");
const { default: mongoose } = require("mongoose");
const router = require("./routes/jobs");
const app = express();
app.use(express.json());
app.use('/jobs', router);
mongoose.connect("mongodb://localhost:27017/jobsphere");


const port = process.env.PORT || 3000;
app.listen(port, console.log("listening " + port));