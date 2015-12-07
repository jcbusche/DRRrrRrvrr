/*global angular*/
/*global gapi*/
angular.module('zombieDrive')
  .service('docList', ['createLinks', function(createLinks){
    /**
   * Print files.
   */
    this.listFiles = function(){
      var request = gapi.client.drive.files.list({
        'maxResults': 10,
        'q': "mimeType = 'application/vnd.google-apps.document'"
      });
      request.execute(function(resp) {
        var docs = [];
        var files = resp.items;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            docs.push(createLinks.appendLink(file.id, file.title));
          }
          console.log('escaped for loop');
        } else {
          console.log('else called');
          //docs.append(createLinks.appendLink('', 'No files found.'));
        }
        console.log(docs);
      });
    };


  // this.displayFile = function(){
  //     fileId = window.location.hash.substring(1);
  //     var request = gapi.client.drive.files.get({fileId: fileId});
  //
  //     request.execute(function(resp) {
  //       var accessToken = gapi.auth.getToken().access_token;
  //
  //       $.ajax({
  //         url: resp.exportLinks["text/plain"],
  //         type: "GET",
  //         beforeSend: function(xhr){
  //           xhr.setRequestHeader('Authorization', "Bearer "+accessToken);
  //         },
  //         success: function( data ) {
  //           $('#output').html(data.replace(/\n/g, "<br>"));
  //         }
  //       });
  //
  //     });
  //   };

  }])
  .service('createLinks', [function(){
    /**
   * Append a link element to the body containing the given text
   * and a link to the /doc page.
   *
   * @param {string} id Id to be used in the link's href attribute.
   * @param {string} text Text to be placed in a element.
   */
   this.appendLink = function(id, text){
     console.log("appendLink called")
    if(id !== ''){
      var li = $('<li></li>');
      var link = $('<a></a>');
      link.attr('href', '/doc.html#'+id);
      link.html(text);
      li.append(link);
      return li;
    } else {
      return text;
    }
  };
}]);
