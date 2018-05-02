'use strict';

const Omega = require('../lib/Omega');


describe('Omega', () => {
  describe('constructor(options)', () => {
    it('should create an instance of Omega', () => {
      expect(new Omega()).toBeInstanceOf(Omega);
    });
  });
});
