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
