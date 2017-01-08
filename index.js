var articleList = new ArticleList();
var controller = new Controller(articleList);
controller.articleList.createArticle("headline", "full text");
controller.articleList.createArticle("headline", "full text");
console.log(controller.articleList);
console.log(controller.articleList.articles[0].getHeadline());
controller.updateHtml();
controller.makeHeadlineLinkShowFullArticle();
