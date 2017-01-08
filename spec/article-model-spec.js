function testCreateArticle() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article)
};
testCreateArticle();

function testCanGetArticleHeadline() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article.headline === "headline");
};
testCanGetArticleHeadline();

function testCanGetFullArticleText() {
  var article = new Article("headline", "full article text");
  assert.isTrue(article.fullText === "full article text");
};
testCanGetFullArticleText();
