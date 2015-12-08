/*global angular*/
angular.module('zombieDrive')
  .directive('docDirective', ['$location', '$timeout', 'viewDocument', 'currentDoc', function($location, $timeout, viewDocument, currentDoc){
    var getDocID = function(){
      var docID = $location.url();
      currentDoc.docID = docID.substring(5);
      //console.log('calling back from getDocID...');
      return currentDoc.docID;
    };

    var link = function(scope, element, attrs){
      var getDocText = function(){
        //console.log('Doc text: ' + currentDoc.docText);
        console.log('checking in from getDocText!');
        element.html(currentDoc.docText);
      };
      var docID = getDocID();
      console.log('calling viewDocument.displayFile....');
      viewDocument.displayFile(docID, getDocText);

    };

    return {
      restrict: 'C',
      link: link
    };
  }]);
