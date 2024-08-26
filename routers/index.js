const { Router }  = require("express");

const indexRouter = Router();
const addRouter = require("./add");

const messages = [{content: "This is a test message 0"}, {content: "This is a test message 2"}];

indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages, greeting: "welcome to the index page!"});
});

indexRouter.use("/add", addRouter);

indexRouter.get("/:messageID", (req, res) => {
    const { messageID } = req.params;
    res.send(`message id is: ${messageID}`);
});
// this will be the route for previewing messages
module.exports = indexRouter;