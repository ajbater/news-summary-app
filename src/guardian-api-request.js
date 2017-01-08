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

  exports.GuardianApiRequest = GuardianApiRequest;

})(this);
