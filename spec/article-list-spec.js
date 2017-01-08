function testArticleListModelCanBeInstantiated() {
  articleList = new ArticleList();
  assert.isTrue(articleList);
};
testArticleListModelCanBeInstantiated();

function testArticleListCreatesANewArticle() {
  articleList = new ArticleList();
  articleList.createArticle("headline", "full article text");
  assert.isTrue(articleList.articles[0] === article);
};
testArticleListCreatesANewArticle();

function testArticleListModelStoresArticles() {
  articleList = new ArticleList();
  articleList.createArticle("headline", "full article text");
  assert.isTrue(articleList.returnList().length === 1);
};
testArticleListModelStoresArticles();
