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

function testGetHtmlFromArticleModel() {
  article = new Article("headline", "full text");
  singleArticleView = new SingleArticleView(article);
  assert.isTrue(singleArticleView.returnSingleArticleHtml() === "<div id='headline'>headline</div><br><div id='full-text'>full text</div>");
};
testGetHtmlFromArticleModel();
