/*global angular*/
/*global gapi*/
angular.module('zombieDrive')
  .service('docList', ['createLinks', 'links', function(createLinks, links){
    /**
   * Print files.
   */
    this.listFiles = function(callback){
      var request = gapi.client.drive.files.list({
        'maxResults': 10,
        'q': "mimeType = 'application/vnd.google-apps.document'"
      });
      console.log('link list : ' + links.list);
      request.execute(function(resp) {
        links.list = [];
        var files = resp.items;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            links.list.push(createLinks.appendLink(file.id, file.title));
            callback();
          }
        } else {
            links.list.push(createLinks.appendLink('', 'No files found.'));
            callback();
        }
        console.log('links: ' + links.list);
      });
    };


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
     console.log("appendLink called");
    if(id !== ''){
      // var li = $('<li></li>');
      // var link = $('<a></a>');
      // link.attr('href', '/doc.html#'+id);
      // link.html(text);
      // li.append(link);
      var li = '<li>';
      li = li.concat('<a href=\"/#/doc/' + id + '\">');
      li = li.concat(text);
      li = li.concat('</a></li>');
      console.log('link:' + li);
      return li;
    } else {
      return text;
    }
  };
}])
  .value('links', {list: []})
  .service('viewDocument', ['currentDoc', function(currentDoc){
    this.displayFile = function(fileId, callback){
      //console.log(fileId);
      var request = gapi.client.drive.files.get({fileId: fileId});

      request.execute(function(resp) {
        var accessToken = gapi.auth.getToken().access_token;

        $.ajax({
          url: resp.exportLinks["text/plain"],
          type: "GET",
          beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', "Bearer "+accessToken);
          },
          success: function( data ) {
            //console.log('data: ' + data);
            currentDoc.docText = data.replace(/\n/g, "<br>");
            console.log('calling back from displayFile...');
            callback();
          }
        });

        });
      };
  }])
  .value('currentDoc', {docID: '', docText: ''});
