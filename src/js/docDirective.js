/*global angular*/
angular.module('zombieDrive')
  .directive('docDirective', ['$location', 'viewDocument', 'currentDoc', 'zombify', function($location, viewDocument, currentDoc, zombify){
    var getDocID = function(){
      var docID = $location.url();
      currentDoc.docID = docID.substring(5);
      //console.log('calling back from getDocID...');
      return currentDoc.docID;
    };
    this.zombie = true;
    var link = function(scope, element, attrs){
      var getDocText = function(){
        //console.log('Doc text: ' + currentDoc.translatedDoc);
        var docText = currentDoc.translatedDoc.replace(/\n/g, "<br>");
        element.html(docText);
      };
      var docID = getDocID();
      console.log('calling viewDocument.displayFile....');
      //var whatever = zombify.translate(getDocText);
      viewDocument.displayFile(docID, function(){
        zombify.translate(getDocText);
      });

    };

    return {
      restrict: 'C',
      link: link
    };
  }]);
