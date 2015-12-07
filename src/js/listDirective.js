/*global angular */
angular.module('zombieDrive')
  .directive('listDir', ['docList', 'links', '$timeout', '$q', function(docList, links, $timeout, $q){
    docList.listFiles();

    var link = function(scope, element, attrs){
      var updateList = function(){
        console.log('outside for loop');
        var output = '';
        console.log('there are ' + links.list.length + ' links.');
        for (var i = 0; i < links.list.length; i ++){
          console.log('link #' + i + ': ' + links.list[i]);
          output = output.concat(links.list[i] + '\n');
        }
        console.log(output);
        element.html(output);
      };
      $timeout(updateList, 600);
      updateList();
    };

    return {
      restrict: 'C',
      link: link
    };

  }]);
