function testCreateArticle(){
  var article = new Article("title", "bodyText");
  assert.isTrue(article)
};
testCreateArticle();
