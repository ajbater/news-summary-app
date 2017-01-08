function testControllerCanBeInstantiated() {
  articleList = new ArticleList();
  controller = new Controller(articleList);
  assert.isTrue(controller);
};
testControllerCanBeInstantiated();

function testControllerIsPassedAnArticleListAndUsesThisToCreateAnArticleListView() {
  articleList = new ArticleList();
  controller = new Controller(articleList);
  assert.isTrue(controller.articleListView instanceof ArticleListView);
};
testControllerIsPassedAnArticleListAndUsesThisToCreateAnArticleListView();
