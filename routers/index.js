require('dotenv').config();
const { Router } = require("express");

const indexRouter = Router();
const addRouter = require("./add");
const controller = require("../controllers/controller");
const { v4: uuidv4 } = require('uuid');


indexRouter.use("/add", addRouter);

indexRouter.post("/add", (req, res) => {
  controller.pushNewMessage(req, res);
});

indexRouter.get("/:messageID", (req, res) => {
  controller.getMessageDetails(req, res);
});

indexRouter.get("/", (req, res) => {
  controller.getMessages(req, res);
});

indexRouter.get("/delete/:messageID", (req, res) => {
  controller.deleteMessage(req, res);
});




// this will be the route for previewing messages
module.exports = indexRouter;
