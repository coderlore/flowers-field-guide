const Comment = require("../models/Comment")

module.exports = {
  createComment: async (req, res) => {
    try {
      //TODO - add new properties teach documents
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        // user: req.user.id,
        post: req.params.id,
        createdBy: req.user.userName,
        createdById: req.user.id
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
  deleteComment: async (req, res) => {
    try {
      // Delete comment from DB
      await Comment.deleteOne({_id: req.params.commentid})
      console.log("Deleted Comment");
      res.redirect("/post/"+req.params.postid);
    } catch (err) {
      console.log
    }
  },
};
