const { Router } = require("express");

const addRouter = Router();

addRouter.get("/", (req, res) => {
    res.send("hello from add");
});

module.exports = addRouter;