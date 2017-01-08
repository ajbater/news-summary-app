(function(exports) {

  function ArticleListView(articleList) {
    this.articleList = articleList;
  };

  ArticleListView.prototype.getArticleList = function() {
    return this.articleList;
  };

  ArticleListView.prototype.returnHtmlList = function() {
    output = "<ul>";
    this.getArticleList().articles.forEach(function(article) {
      output += "<li><a href='#" + article.id + "'><div>" + article.headline + "</div></a></li>";
    })
    return output + "</ul>";
  };

  exports.ArticleListView = ArticleListView;

})(this);
