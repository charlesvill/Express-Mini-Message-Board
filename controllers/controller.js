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

module.exports = {
  getMessages,
  getMessageDetails,
};
