function testArticleListViewModelCanBeInstantiated() {
  articleListView = new ArticleListView();
  assert.isTrue(articleListView);
};
testArticleListViewModelCanBeInstantiated();

function testArticleListModelInstantiatesWithArticleListModel() {
  articleList = new ArticleList();
  articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.articleList === articleList);
};
testArticleListModelInstantiatesWithArticleListModel();

function testCanReturnArticleList() {
  articleList = new ArticleList();
  articleList.createArticle("headline", "full article text");
  articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.getArticleList() === articleListView.articleList);
};
testCanReturnArticleList()

function testArticleListViewReturnsHtml() {
  articleList = new ArticleList();
  articleList.createArticle("headline", "full article text");
  articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.returnHtmlList() === "<ul><li><a href='#8'><div>headline</div></a></li></ul>");
};
testArticleListViewReturnsHtml();
