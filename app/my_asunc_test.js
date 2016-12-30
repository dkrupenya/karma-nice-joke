'use strict';
angular.module('myApp', []);

describe('Lets repeat one test many times', function () {
    var $httpBackend, $http, result;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_$http_, _$httpBackend_) {
        $http = _$http_;
        $httpBackend = _$httpBackend_;

        $httpBackend.expectGET('/api/a').respond('a');

        result = $http.get('/api/a').then(function (res) {
            return res.data;
        });

        $httpBackend.flush();
    }));

    afterEach(function () {
        // $httpBackend.verifyNoOutstandingExpectation();
        // $httpBackend.verifyNoOutstandingRequest();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

    it('All work and no play makes Jack a dull boy', function (done) {
        result.then(function (res) {
            expect(res).toEqual('a');
            done();
        });
        $httpBackend.flush();
    });

});
