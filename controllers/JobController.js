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
       console.log("created successfully");
       return job;
    } catch(e) {
        return e;
    }
   
}
module.exports = {getJobs, createJob};