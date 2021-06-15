const app = require("../server");
const request = require("supertest");


describe('Test Subtract Web', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=12&y=5')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(7);
                expect(res.body.error).toBe(false);
                expect(res.body.string).toBe("12-5=7");
                done();
            });
        });
});

describe('Test Subtract Web No x', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?&y=5')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param x is missing");
                done();
            });
        });
});

describe('Test Subtract Web x Empty', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=&y=5')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param x is missing");
                done();
            });
        });
});

describe('Test Subtract Web No y', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=12')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param y is missing");
                done();
            });
        });
});

describe('Test Subtract Web y Empty', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=12&y=')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param y is missing");
                done();
            });
        });
});

describe('Test Subtract Web x as String', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=the&y=5')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param x is not an integer");
                done();
            });
        });
});

describe('Test Subtract Web y as String', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=12&y=the')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param y is not an integer");
                done();
            });
        });
});

describe('Test Subtract Web no params', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param x is missing");
                done();
            });
        });
});

describe('Test Subtract Web both params empty', function() {
        it('responds with json', function(done) {
          request(app)
            .get('/?x=&y=')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .end(function(err,res){
                if (err) throw err;
                expect(res.body.answer).toBe(0);
                expect(res.body.error).toBe(true);
                expect(res.body.string).toBe("Param x is missing");
                done();
            });
        });
});