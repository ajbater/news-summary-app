(function(exports) {

  function ArticleList() {
    this.articles = [];
  };

  ArticleList.prototype.createArticle = function(headline, fullText) {
    article = new Article(headline, fullText);
    this.articles.push(article);
  };

  ArticleList.prototype.returnList = function() {
    return this.articles;
  };

  exports.ArticleList = ArticleList;

})(this);
