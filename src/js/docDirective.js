/*global angular*/
angular.module('zombieDrive')
  .directive('docDirective', ['$location', '$timeout', 'viewDocument', 'currentDoc', function($location, $timeout, viewDocument, currentDoc){
    var getDocID = function(){
      var docID = $location.url();
      currentDoc.docID = docID.substring(5);
    };
    getDocID();
    viewDocument.displayFile(currentDoc.docID);
    var link = function(scope, element, attrs){
      var getDocText = function(){
        console.log('Doc text: ' + currentDoc.docText);
        element.html(currentDoc.docText);
      };
      $timeout(getDocText, 1000);

    };

    return {
      restrict: 'C',
      link: link
    };
  }]);
