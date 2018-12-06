'use strict';

describe ('Model: services', function () {

    beforeEach(module('rhasesAngularJSCommons.services'));

    var transformerService;

    var localDeal = {
        "_id": "571bc31d121a6e03007632b4",
        "email": 'pedrinho@gmail.com', // email
    }

    var localDeal2 = {
        "_id": "571bc31d121a6e03007632b5",
        "email": 'mariazinha@gmail.com', // email
    }

    var pdDeal = {
        id: 1,
        title: "Maria Silva"
    };

    var fields = [
        //to pipedrive
        { local: 'title', remote: 'title', policy: 'local' },
        { local: 'email', remote: 'email', policy: 'local' },
    ];

    beforeEach(inject(function (transformService) {
        this.transformerService = transformService;
    }));


    it('should return a pipedrive Deals from Local Deal', function () {
        var transport = this.transformerService.transportOut(fields, localDeal, {});
        console.log('trasnport:' + JSON.stringify(transport));
        transport.data.email.should.be.equals(localDeal.email);
        transport.action.should.be.equals('create');
    });
});
