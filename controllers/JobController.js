const Jobs = require("../models/Jobs");
function getJobs() {
    try {
        return Jobs.find({});
    } catch(e) {
        return e;
    }
     
}

 async function createJob(props) {
    try {
       const job = await Jobs.create(props);
       return job;
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
module.exports = {getJobs, createJob, updateJob, deleteJob};