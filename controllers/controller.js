const db = require("../db/queries");

async function getMessages(req, res) {
  messages = await db.getAllMessages();
  const contentView = "all";
  res.render("index", {
    contentView: contentView,
    params: { messages: messages }
  });
}

async function getMessageDetails(req, res) {
  const { messageID } = req.params;
  console.log("id is: ", messageID);
  const message = await db.getMessageById(messageID);
  console.dir("query for id: ", message);
  console.log(message);
  if(message.length === 0) {
    res.render("404");
    return;
  }
  res.render("index", {
    contentView: "message",
    params: { message: message[0] }
  });
}

async function pushNewMessage(req, res) {
  const name = req.body.name;
  const message = req.body.content;
  const time = new Date().toLocaleString();

  await db.insertMessage({
    name: name,
    content: message,
    time: time
  });
  res.redirect("/");
}

async function deleteMessage(req, res) {
  const { messageID }  = req.params;
  console.log("message to be removed is: ", messageID);
  db.deleteMessageById(messageID);
  res.redirect("/");
}

module.exports = {
  getMessages,
  getMessageDetails,
  pushNewMessage, 
  deleteMessage
};
