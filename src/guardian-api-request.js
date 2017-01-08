(function(exports) {

  function GuardianApiRequest() {
    this.makersApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
    this.date = new Date();
    this.dateString = this.date.getMonth() + 1 + "-" + this.date.getDate() + "-" + this.date.getFullYear();
  };

  exports.GuardianApiRequest = GuardianApiRequest;

})(this);
