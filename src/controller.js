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

  Controller.prototype.makeHeadlineLinkShowFullArticle = function() {
    window.addEventListener("hashchange", this.showHtmlForSingleArticle.bind (this));
  };

  Controller.prototype.showHtmlForSingleArticle = function() {
    var article = this.findArticleFromArticleList().returnSingleArticleHtml();
    html = document.getElementById("app");
    html.innerHTML = article;
  };

  Controller.prototype.getArticleIdFromUrl = function() {
    return window.location.hash.split("#")[1];
  };

  Controller.prototype.findArticleFromArticleList = function() {
    var idFromUrl = controller.getArticleIdFromUrl();
    var singleArticleView = new SingleArticleView(articleList.articles[idFromUrl]);
    return singleArticleView;
  };

  exports.Controller = Controller;

})(this);
