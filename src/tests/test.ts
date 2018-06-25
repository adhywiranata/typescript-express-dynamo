'use strict';

declare function require(module: string): void;
declare function describe(message: string, callback: any): void;
declare function it(message: string, callback: any): void;

import * as supertest from 'supertest';
import { expect } from 'chai';

import app from '../app';

const req = supertest(app);

describe('Tests app', function() {
  it('verifies get on /', function(done) {
    req.get('/').expect(200).end(function(err, res) {
      expect(res.body.Output).to.equal('STAR: SIRIUS');
      expect(res.status).to.equal(200);
      expect(res.header['content-type']).to.equal('application/json; charset=utf-8');
      done(err);
    });
  });
});

describe('products', function() {
  it('Successfully fetch products', function(done) {
    req.get('/products').expect(200).end(function(err, res) {
      expect(res.status).to.equal(200);
      expect(res.header['content-type']).to.equal('application/json; charset=utf-8');
      done(err);
    });
  });
});

export {};

