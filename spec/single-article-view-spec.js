function testSingleArticleViewCanBeInstantiated() {
  article = new Article("headline", "full text");
  singleArticleView = new SingleArticleView(article);
  assert.isTrue(singleArticleView);
};
testSingleArticleViewCanBeInstantiated();

function testSingleArticleViewInstantiatesWithAnArticleModel() {
  article = new Article("headline", "full text");
  singleArticleView = new SingleArticleView(article);
  assert.isTrue(singleArticleView.article === article);
};
testSingleArticleViewInstantiatesWithAnArticleModel();
