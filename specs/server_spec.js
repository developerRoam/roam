process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../app');

var should = chai.should();
chai.use(chaiHttp);


describe('Home Route', function() {

    it('should work on GET /', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });

});