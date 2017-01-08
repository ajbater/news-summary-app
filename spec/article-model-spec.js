function testArticleModelCanBeInstantiated() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article);
};
testArticleModelCanBeInstantiated();

function testCanGetArticleHeadline() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article.getHeadline() === "headline");
};
testCanGetArticleHeadline();

function testCanGetFullArticleText() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article.getFullText() === "full article text");
};
testCanGetFullArticleText();
