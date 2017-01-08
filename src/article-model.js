(function(exports) {

  function Article(headline, fullText) {
    this.headline = headline;
    this.fullText = fullText;
  };

  Article.prototype.getHeadline = function() {
    return this.headline;
  };

  Article.prototype.getFullText = function() {
    return this.fullText;
  };

  exports.Article = Article;

})(this);
