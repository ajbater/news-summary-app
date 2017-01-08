(function(exports) {

  function Controller(articleList) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(this.articleList);
  };

  Controller.prototype.createArticle = function(headline, fullText) {
    this.articleList.createArticle(headline, fullText);
    return this.articleList.returnList();
  };

  Controller.prototype.updateHtml = function(articleListView) {
    var element = document.getElementById("app");
    element.innerHTML = this.articleListView.returnHtmlList();
  };

  exports.Controller = Controller;

})(this);
