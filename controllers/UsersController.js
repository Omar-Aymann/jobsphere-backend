const Users = require("../models/Users");
function getUsers() {
    try {
        return Users.find({});
    } catch(e) {
        return e;
    }
     
}

 async function createUser(props) {
    try {
       const job = await Users.create(props);
       return job;
    } catch(e) {
        return e;
    }
   
}
async function updateUser(jobId, props) {
    try {
        const response = Users.findByIdAndUpdate(jobId, props, {new: true});
        return response;
    } catch(e) {
        return e;
    }
}
async function deleteUser(jobId) {
    try {
        const response = await Users.findByIdAndDelete(jobId);
        return response;
    } catch(e) {

        return e;
    }
}
module.exports = {getUsers, createUser, updateUser, deleteUser};