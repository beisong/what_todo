var assert = require('assert');
const path = require('path');
const getFilesInDIR = require('../getFilesInDIR');
const todoFound = require('../todoFound');


describe('Testing getFilesInDIR', () => {
  context('When run on /test', function() {
    it('should return array with 6 files', function() {
      assert.equal(getFilesInDIR(process.cwd()+'/test').length, 6);
    });
  });

  context('When run on /test/dirwithouttodos', function() {
    it('should return array with length 1', function() {
      assert.equal(getFilesInDIR(process.cwd()+'/test/dirwithouttodos').length, 1);
    });

    it('should return the correct path for file', function() {
      assert.equal(getFilesInDIR(process.cwd()+'/test/dirwithouttodos')[0], path.join( process.cwd(), '/test/dirwithouttodos/example4.js'));
    });
  });

  context('When run on empty dir', function() {
    it('should return array with length 0', function() {
      assert.equal(getFilesInDIR(process.cwd()+'/test/emptydir').length , 0);
    });
  });
});

describe('Testing todoFound', () => {
  context('When run on a file with TODO', function() {
    it('should return true', function () {
      assert.equal(todoFound(path.join( process.cwd(), '/test/example.js')) , true);
    });
  });

  context('When run on a file without todo', function() {
    it('should return false', function () {
      assert.equal(todoFound(path.join( process.cwd(), '/test/dirwithouttodos/example4.js')) , false);
    });
  });

});

describe('Integration testing of getFilesInDIR and todoFound', () => {
  context('When run on /test/dirwithtodos', function() {
    it('should return true for the 3 files', function() {
      getFilesInDIR((path.join( process.cwd(), '/test/dirwithtodos'))).forEach( filePath => {
        assert.equal(todoFound(filePath), true);
      });
    });
  });

  context('When run on /test/dirwithouttodos', function() {
    it('should return false for 1 files', function() {
      getFilesInDIR((path.join( process.cwd(), '/test/dirwithouttodos'))).forEach( filePath => {
        assert.equal(todoFound(filePath), false);
      });
    });
  });

});