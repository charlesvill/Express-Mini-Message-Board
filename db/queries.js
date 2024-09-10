const pool = require("./pool.js");


// getAllMessages
async function getAllMessages() {
  console.log("here we go");
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows);
  return rows;
}
// insertMessage
async function insertMessage(message) {
  await pool.query("INSERT INTO messages (name, content, time) VALUES ($3)", [message.name, message.content, message.time]);
}
// deleteMessage
async function deleteMessage(message) {
  await pool.query("DELETE FROM messages WHERE id = ($1)", [message.id]);
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteMessage
};
