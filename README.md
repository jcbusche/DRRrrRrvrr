build instructions:
in the base directory:
npm install
bower install
gulp
navigate to /dist
if you're running python 2.X:
python -m SimpleHTTPServer 8000
if you're running python 3.X:
python -m http.server 8000
Then navigate to localhost:8000 in your browser to view the app.


A couple of notes:
I set the character limit for url's to be sent to the API at 8000.  This is
probably larger than most servers allow, but it isn't for the for the server that
the zombie translator API is hosted on so I thought it best to leave as much of
the doc intact as possible.
