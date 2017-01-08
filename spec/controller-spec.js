function testControllerCanBeInstantiated() {
  articleList = new ArticleList();
  controller = new Controller(articleList);
  assert.isTrue(controller);
};
testControllerCanBeInstantiated();
