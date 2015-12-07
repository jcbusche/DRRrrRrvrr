/*global angular */
angular.module('zombieDrive')
  .directive('oAuthBtn', ['authorize', function(authorize){
    var link = function(scope){
      scope.authClick = function(){
        authorize.handleAuthClick();
        console.log("clicked");
      };
    };
    return {
      restrict: 'C',
      link: link
    };
  }]);
