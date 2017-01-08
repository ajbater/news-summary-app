function testCanInstantiateNewRequestObject() {
  apiRequest = new GuardianApiRequest();
  assert.isTrue(apiRequest);
};
testCanInstantiateNewRequestObject();

function testRequestHasApiKey() {
  apiRequest = new GuardianApiRequest();
  assert.isTrue(apiRequest.makersApi === "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=");
};
testRequestHasApiKey();
