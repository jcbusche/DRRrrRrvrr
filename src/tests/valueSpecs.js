
describe('CLIENT_ID', function(){
  var CLIENT_ID;
  beforeEach(module('zombieDrive'));
  beforeEach(inject(function($injector){
    CLIENT_ID = $injector.get('CLIENT_ID');
  }));
  it("should initialize to the client ID I created", function(){
    expect(CLIENT_ID).toBe('817404095604-rr61nj45l03vcgg7fjqeunuse809p3js.apps.googleusercontent.com');
  });
});

describe('SCOPES', function(){
  var SCOPES;
  beforeEach(module('zombieDrive'));
  beforeEach(inject(function($injector){
    SCOPES = $injector.get('SCOPES');
  }));
  it("should initialize to the scopes I created", function(){
    expect(SCOPES).toBe('https://www.googleapis.com/auth/drive.readonly');
  });
});

describe('currentDoc', function(){
  var currentDoc;
  beforeEach(module('zombieDrive'));
  beforeEach(inject(function($injector){
    currentDoc = $injector.get('currentDoc');
  }));
  it('should initialize to an object of four empty strings', function(){
    expect(currentDoc.docID).toBe('');
    expect(currentDoc.docText).toBe('');
    expect(currentDoc.translatedDoc).toBe('');
  });
});

describe('links', function(){
  var links;
  beforeEach(module('zombieDrive'));
  beforeEach(inject(function($injector){
  links = $injector.get('links');
  }));
  it('should initialize to an object containing an empty array', function(){
    expect(links.list).toEqual( [ ] );
  });
});
