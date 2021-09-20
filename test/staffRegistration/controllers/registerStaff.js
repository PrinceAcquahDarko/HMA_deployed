"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var staffRegistration_1 = require("../../../build/controllers/staffRegistration");
var sinon = require('sinon');
describe('register User', function () {
    var req;
    var res;
    beforeEach(function () {
        req = {
            body: {
                firstname: 'rpnce',
                lastname: 'sa',
                email: 'ingo@gmail.com',
                password: 'fjoej',
                position: 'feo'
            }
        };
        res = {
            status: function (num) {
                console.log('foe');
            }
        };
    });
    it('should save user if user is valid', function () {
        var controller = staffRegistration_1.Controller();
        var spy = sinon.spy(controller.implementSave);
        controller.saveUser(req, res);
        spy.calledOnce.should.be.true;
    });
});
//# sourceMappingURL=registerStaff.js.map