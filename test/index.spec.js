process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index.js';

const should = chai.should();

chai.use(chaiHttp);

describe('Test Api server', () => {
  it('server returning the set value to /Get /api/', (done) => {
    chai.request(server)
      .get('/api/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Hello World!');
        done();
      });
  });
});
