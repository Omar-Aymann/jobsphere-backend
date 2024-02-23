const express = require("express");
const router = express.Router();
const {getJobs} = require("../controllers/JobController");
const {createJob} = require("../controllers/JobController");
router.get("/", async (req, res) => {
    const jobs = await getJobs();
    res.json(jobs);
}).post("/create", async (req, res) => {
    const msg = await createJob(req.body);
    res.json(msg);
})

module.exports = router;