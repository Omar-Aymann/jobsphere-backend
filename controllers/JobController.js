const Jobs = require("../models/Jobs");
async function getJobs() {
    try {
        const jobs = await Jobs.find({}).sort({created_at: "desc"});
        return jobs
    } catch(e) {
        return e;
    }
     
}

 async function createJob(props) {
    try {
       const job = await Jobs.create({...props, created_at: Date.now()});
       return job;
    } catch(e) {
        return e;
    }
   
}
async function getJob(id) {
    try {
        const job = await Jobs.find({_id: id});
        return job
    } catch(e) {
        return e;
    }
}
async function updateJob(jobId, props) {
    try {
        const response = Jobs.findByIdAndUpdate(jobId, props, {new: true});
        return response;
    } catch(e) {
        return e;
    }
}
async function deleteJob(jobId) {
    try {
        const response = await Jobs.findByIdAndDelete(jobId);
        return response;
    } catch(e) {

        return e;
    }
}
module.exports = {getJobs, createJob, updateJob, deleteJob, getJob};