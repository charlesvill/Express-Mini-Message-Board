const express = require("express");
const path = require("node:path");

const app = express();

const indexRouter = require("./routers/index");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

app.use("/", indexRouter);

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
