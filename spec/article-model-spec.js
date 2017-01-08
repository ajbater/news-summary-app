function testCreateArticle() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article)
};
testCreateArticle();

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
