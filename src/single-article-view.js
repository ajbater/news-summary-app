(function(exports) {

  function SingleArticleView(article) {
    this.article = article;
  };

  SingleArticleView.prototype.returnSingleArticleHtml = function() {
    return "<div id='headline'>" + this.article.getHeadline() + "</div><br><div id='full-text'>" + this.article.getFullText() + "</div>";
  };

  exports.SingleArticleView = SingleArticleView;

})(this);
