/*global angular*/
/*global gapi*/
angular.module('zombieDrive')
  .service('authorize', ['$window', 'CLIENT_ID', 'SCOPES', function($window, CLIENT_ID, SCOPES){
      /**
     * Initiate auth flow in response to user clicking authorize button.
     *
     * @param {Event} event Button click event.
     */
    this.handleAuthClick = function(event) {
      console.log("authorize function caled");
      gapi.auth.authorize(
        {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
        this.handleAuthResult);
      return false;
    };
    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    this.handleAuthResult = function(authResult) {
      //var authorizeDiv = document.getElementById('authorize-div');
      if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        // authorizeDiv.style.display = 'none';
        //loadDriveApi();
        console.log("Success!");
        $window.location.href = '/#/list';

      } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.

        console.log("failure");
      }
    };
      /**
     * Check if current user has authorized this application.
     */
    this.checkAuth = function() {
      gapi.auth.authorize(
        {
          'client_id': CLIENT_ID,
          'scope': SCOPES,
          'immediate': true
        }, this.handleAuthResult);
    };

  }])
  .value('authStatus', false);
