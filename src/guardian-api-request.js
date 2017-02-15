(function(exports) {

  function GuardianApiRequest() {
    this.makersApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
    this.articlesUrl = "http://content.guardianapis.com/search?from-date=";
    this.date = new Date();
    this.dateString = this.date.toISOString().split('T')[0];
  };

  GuardianApiRequest.prototype.createRequestUrl = function() {
    return this.makersApi + this.articlesUrl + this.dateString;
  };

  GuardianApiRequest.prototype.makeRequest = function() {
    var request = new XMLHttpRequest();
    var newsArticles = this.createRequestUrl();
    request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        console.log(request.responseText);
        var resultsArray = JSON.parse(this.responseText);
        console.log(resultsArray);
      }
    }
    request.open('GET', newsArticles, true);
    request.send();
  };

  exports.GuardianApiRequest = GuardianApiRequest;

})(this);
