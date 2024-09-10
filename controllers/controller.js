const db = require("../db/queries");

async function getMessages(req, res) {
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
