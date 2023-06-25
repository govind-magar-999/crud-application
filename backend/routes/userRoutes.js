const express = require("express");
const router = express.Router();
const {home, createUser, getUsers, editUser, deleteUser} = require("../controllers/userControllers");

router.get("/", home);
router.post("/createuser", createUser);
router.get("/getuser", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;