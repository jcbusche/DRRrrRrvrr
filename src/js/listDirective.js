/*global angular */
angular.module('zombieDrive')
  .directive('listDir', ['docList', 'links', function(docList, links){


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
      console.log('calling docList.listFiles...');
      docList.listFiles(updateList);
    };

    return {
      restrict: 'C',
      link: link
    };

  }]);
