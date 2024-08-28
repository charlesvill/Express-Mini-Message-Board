const { Router } = require("express");

const indexRouter = Router();
const addRouter = require("./add");
const { v4: uuidv4 } = require('uuid');


const messages = [
  {
    user: "bob",
    content: "Testing 1, 2, 3",
    added: "08/27/2024",
    messageId: "123456"
  },
  {
    user: "Pedro",
    content: "Hello world",
    added: "08/25/2024",
    messageId: "123iad"
  },{
    user: "Hairy Squatter",
    content: "A what??",
    added: "08/21/2024",
    messageId: "984356"
  },
];

indexRouter.use("/add", addRouter);

indexRouter.post("/add", (req, res) => {
  const userName = req.body.username;
  const message = req.body.textarea;

  messages.push({
    user: userName,
    content: message,
    added: new Date(),
    messageId: uuidv4().substring(0, 5)
  });
  res.redirect("/");
});

indexRouter.get("/:messageID", (req, res) => {
  console.dir(req);
  const { messageID } = req.params;
  const found = messages.find((element) => element.messageId === messageID);
  if (!found) {
    res.render("404");
    return;
  }
  const contentView = "message";
  res.render("index", {
    contentView: contentView,
    params: { message: found }
  });
});

indexRouter.get("/", (req, res) => {
  const contentView = "all";
  res.render("index", {
    contentView: contentView,
    params: { messages: messages }
  });
});





// this will be the route for previewing messages
module.exports = indexRouter;
