function testSingleArticleViewCanBeInstantiated() {
  function ArticleDouble(headline, fullText) {};
  // ArticleDouble.prototype = {
  //   getHeadline: function() {
  //     return "headline";
  //   }
  //
  //   getFullText: function() {
  //     return "full article text";
  //   }
  // };

  articleDouble = new ArticleDouble();
  singleArticleView = new SingleArticleView(articleDouble);
  assert.isTrue(singleArticleView);
};
testSingleArticleViewCanBeInstantiated();
