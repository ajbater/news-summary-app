(function(exports) {

  var idCounter = 0;

  function Article(headline, fullText) {
    this.headline = headline;
    this.fullText = fullText;
    this.id = idCounter++;
  };

  Article.prototype.getHeadline = function() {
    return this.headline;
  };

  Article.prototype.getFullText = function() {
    return this.fullText;
  };

  exports.Article = Article;

})(this);
