var articleList = new ArticleList();
var controller = new Controller(articleList);
controller.articleList.createArticle("headline", "summary");
controller.articleList.createArticle("headline", "summary");
controller.updateHtml();
controller.makeHeadlineLinkShowFullArticle();
