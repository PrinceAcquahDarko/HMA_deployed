"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var staffLogin_1 = require("../../build/controllers/staffLogin");
var sinon_1 = __importDefault(require("sinon"));
describe('login User', function () {
    var req;
    var res;
    var register;
    beforeEach(function () {
        req = {
            body: {
                email: 'ingo@gmail.com',
                password: 'fjoej',
            }
        };
        res = {
            status: function (x) {
                function send(y) {
                }
                return { send: send };
            }
        };
        register = {
            //this one should be mocked and made to return something
            findOne: sinon_1.default.spy()
        };
    });
    it('should not login user if user if user has a wrong email', function () {
        var staffLogin = new staffLogin_1.StaffLogin();
        staffLogin.loginUser(req, res);
    });
    it('should not login user if user if user has a wrong password', function () {
        var staffLogin = new staffLogin_1.StaffLogin();
    });
    it('should login user if user if user has a right email and password', function () {
        var staffLogin = new staffLogin_1.StaffLogin();
    });
});
//# sourceMappingURL=loginStaff.spec.js.map