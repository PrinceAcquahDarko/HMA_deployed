"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var staffRegistration_1 = require("../../build/controllers/staffRegistration");
var sinon_1 = __importDefault(require("sinon"));
describe('register User', function () {
    var req;
    var res;
    var user;
    beforeEach(function () {
        req = {
            body: {
                firstname: 'rpnce',
                lastname: 'sa',
                email: 'ingo@gmail.com',
                passwordGroup: {
                    password: '0493fdsak;'
                },
                position: 'kdkde'
            }
        };
        res = {
            status: function (x) {
                function send(y) {
                }
                return { send: send };
            }
        };
    });
    it('should save user if user data is valid', function () {
        var registerStaff = new staffRegistration_1.RegisterStaff();
        var spy = sinon_1.default.spy(registerStaff, 'implementSave');
        registerStaff.saveUser(req, res);
        spy.calledOnce.should.be.true;
    });
    it("should not save user if user data is invalid (in this case firstname is invalid)", function () {
        var registerStaff = new staffRegistration_1.RegisterStaff();
        var spy = sinon_1.default.spy(registerStaff, 'implementSave');
        req.body.firstname = '';
        registerStaff.saveUser(req, res);
        spy.calledOnce.should.be.false;
        // res.status.called.should.be.true
    });
});
//# sourceMappingURL=registerStaff.spec.js.map