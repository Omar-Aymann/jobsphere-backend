const express = require("express");
const router = express.Router();
const {getJobs} = require("../controllers/JobController");
const {getJob} = require("../controllers/JobController");
const {createJob} = require("../controllers/JobController");
const {updateJob} = require("../controllers/JobController");
const {deleteJob} = require("../controllers/JobController");
router.get("/", async (req, res) => {
    const jobs = await getJobs();
    res.json(jobs);
}).get("/:id", async (req, res) => {
    const job = await getJob(req.params.id);
    res.json(job)
}).post("/", async (req, res) => {
    const msg = await createJob(req.body);
    res.json(msg);
}).put("/:id", async (req, res) => {
   const update = await updateJob(req.params.id, req.body);
   res.json(update);
}).delete("/:id",async (req,res) => {
    const drop = await deleteJob(req.params.id);
    res.json(drop);
})

module.exports = router;