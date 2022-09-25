const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);

//Add later
// router.get("/:id", ensureAuth, postsController.getPost);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment);


module.exports = router;
