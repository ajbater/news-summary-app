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

function testArticleHasAUniqueId() {
  article = new Article("headline", "full text");
  anotherArticle = new Article("headline", "full text");
  assert.isTrue(anotherArticle.id === article.id + 1);
};
testArticleHasAUniqueId();
