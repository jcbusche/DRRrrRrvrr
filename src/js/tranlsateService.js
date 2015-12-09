/*global angular */
angular.module('zombieDrive')
  .service('zombify', ['currentDoc','$http' ,function(currentDoc, $http){
    this.translate = function(callback){
      var toTranslate = encodeURIComponent(currentDoc.docText);
      var url = 'http://ancient-anchorage-9224.herokuapp.com/zombify?q=';
      url = url.concat(toTranslate);
      console.log('url: ' + url);
      $http.get(url, {})
        .then(function(response){
          currentDoc.translatedDoc = response.data.message;
          console.log('from $http: ' + response.data.message);
          console.log('translatedDoc: ' + currentDoc.translatedDoc);
          console.log('calling back from translator...');
          if (callback) {callback();}
        });

    };
  }]);
