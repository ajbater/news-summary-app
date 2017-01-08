function testGuardianApiRequestModelCanBeInstantiated() {
  apiRequest = new GuardianApiRequest();
  assert.isTrue(apiRequest);
};
testGuardianApiRequestModelCanBeInstantiated();

function testRequestHasApiKey() {
  apiRequest = new GuardianApiRequest();
  assert.isTrue(apiRequest.makersApi === "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=");
};
testRequestHasApiKey();
