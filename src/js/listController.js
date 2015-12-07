/*global angular */
angular.module('zombieDrive')
  .controller('listController', ['docList', function(docList){
    this.docLinks = docList.listFiles();
    console.log('controller: ' + this.docLinks);
  }]);
