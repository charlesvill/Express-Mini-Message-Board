const { Router } = require("express");

const addRouter = Router();

addRouter.get("/", (req, res) => {
  const contentView = "add";
  res.render("index", {
    contentView: contentView,
    params: null
  });
});

module.exports = addRouter;
