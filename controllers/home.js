module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getSearch: async (req, res) => {
    res.render("search.ejs");
  },
};
