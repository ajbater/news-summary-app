(function(exports) {

  function Controller(articleList) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(this.articleList);
  };

  exports.Controller = Controller;

})(this);
