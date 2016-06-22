'use strict';

describe('enjoyinsa.version module', function() {
  beforeEach(module('enjoyinsa.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
