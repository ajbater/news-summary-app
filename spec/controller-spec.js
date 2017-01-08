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

// function testCanUpdateHtml() {
//   function ArticleListViewDouble() {
//     this.getArticleListCallCount = 0;
//   };
//
//   ArticleListViewDouble.prototype = {
//     getArticleList: function() {
//       this.returnHtmlListCallCount += 1;
//       return "headline";
//     }
//   };
//
//   articleList = new ArticleList();
//   controller = new Controller(articleList);
//   double = new ArticleListViewDouble();
//   console.log(controller);
//   controller.updateHtml(double);
//   assert.isTrue(double.returnHtmlListCallCount === 1);
// };
// testCanUpdateHtml();
