const express = require("express");
const router = express.Router();
const {getUsers} = require("../controllers/UsersController");
const {createUser} = require("../controllers/UsersController");
const {updateUser} = require("../controllers/UsersController");
const {deleteUser} = require("../controllers/UsersController");
router.get("/", async (req, res) => {
    const Users = await getUsers();
    res.json(Users);
}).post("/", async (req, res) => {
    const msg = await createUser(req.body);
    res.json(msg);
}).put("/:id", async (req, res) => {
   const update = await updateUser(req.params.id, req.body);
   res.json(update);
}).delete("/:id",async (req,res) => {
    const drop = await deleteUser(req.params.id);
    res.json(drop);
})

module.exports = router;