const express = require("express");
const path = require("node:path");
const PORT = process.env.PORT || 3000;

const app = express();

const indexRouter = require("./routers/index");
// below is for loading static css sheets linked 
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

app.use("/", indexRouter);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
