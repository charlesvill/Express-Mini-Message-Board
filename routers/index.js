const { Router } = require("express");

const indexRouter = Router();
const addRouter = require("./add");

const messages = [{ content: "This is a test message 0" }, { content: "This is a test message 2" }];

indexRouter.use("/add", (req, res) => {
  contentView = "add";
  res.render("index", {
    contentView: contentView,
    params: null
  });
});

indexRouter.get("/:messageID", (req, res) => {
  const { messageID } = req.params;
  const contentView = "message";
  res.render("index", {
    contentView: contentView,
    params: { messageID: messageID }
  });
});

indexRouter.get("/", (req, res) => {
  contentView = "all";
  res.render("index", {
    contentView: contentView,
    params: { messages: messages }
  });
});




// this will be the route for previewing messages
module.exports = indexRouter;
