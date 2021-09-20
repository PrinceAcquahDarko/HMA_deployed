"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var staffRegitstration_1 = require("../../build/validations/staffRegitstration");
var sinon_1 = __importDefault(require("sinon"));
var chai_1 = __importDefault(require("chai"));
chai_1.default.should();
describe('Staff Validation', function () {
    var data;
    var validFunction;
    beforeEach(function () {
        data = {
            firstname: 'PRINCE',
            lastname: 'DARKO',
            email: 'info@gmail.com',
            password: '123456',
            position: 'doc'
        };
        validFunction = new staffRegitstration_1.StaffRegistration(data);
    });
    it('should be valid if email is defined and has a correct type', function () {
        var email = validFunction.validEmail();
        email.should.be.true;
    });
    it('should be valid if firstname is defined', function () {
        var firstname = validFunction.validFirstname();
        firstname.should.be.true;
    });
    it('should be valid if lastname is defined', function () {
        var lastname = validFunction.validLastname();
        lastname.should.be.true;
    });
    it('should be valid if password is defined and is more than six chars long', function () {
        var password = validFunction.validPassword();
        password.should.be.true;
    });
    it('should be valid if position is defined and has a correct type', function () {
        var position = validFunction.validPostion();
        position.should.be.true;
    });
    it('should be valid if all fields all valid', function () {
        var allValid = validFunction.allValid();
        allValid.should.be.true;
    });
    it('should at least called one of the validate funcs (valid Email)', function () {
        var spy = sinon_1.default.spy(validFunction, 'validEmail');
        var allValid = validFunction.allValid();
        spy.calledOnce.should.be.true;
    });
});
//# sourceMappingURL=staffRegistration.spec.js.map