/*global angular */
angular.module('zombieDrive')
  .directive('oAuthBtn', ['authorize', '$timeout', function(authorize, $timeout){
    var link = function(scope){
      scope.authClick = function(){
        authorize.handleAuthClick();
        console.log("clicked");
      };
      var init = function(){
        if (authorize.checkAuth){
          authorize.checkAuth();
        }
      };
      $timeout(init, 500);
    };
    return {
      restrict: 'C',
      link: link
    };
  }]);
