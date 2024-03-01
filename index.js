const express = require("express");
const { default: mongoose } = require("mongoose");
const jobsRouter = require("./routes/jobsRouter");
const usersRouter = require("./routes/usersRouter");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());
app.use('/jobs', jobsRouter);
app.use('/users', usersRouter);
mongoose.connect("mongodb://localhost:27017/jobsphere");


const port = process.env.PORT || 3000;
app.listen(port, console.log("listening " + port));