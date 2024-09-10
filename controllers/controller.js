const db = require("../db/queries");

async function getMessages(req, res) {
  console.log("this is right before messages gets called");
  messages = await db.getAllMessages();
  const contentView = "all";
  res.render("index", {
    contentView: contentView,
    params: { messages: messages }
  });
}

module.exports = {
  getMessages
};
