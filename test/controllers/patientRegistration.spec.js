"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var chai_1 = __importDefault(require("chai"));
chai_1.default.should();
var patientRegistration_1 = require("../../build/controllers/patientRegistration");
describe('Patient Registation', function () {
    var req;
    var res;
    beforeEach(function () {
        req = {
            body: {
                lastname: 'prince',
                contact: '74525555157',
                key: ''
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
    it('should set the key correctly', function () {
        var patient = new patientRegistration_1.PatientRegistration();
        var spy = sinon_1.default.spy(patient, 'implementSave');
        patient.savePatient(req, res);
        req.body.key.should.equal('nce157');
    });
    it('should call the implement save function', function () {
        var patient = new patientRegistration_1.PatientRegistration();
        var spy = sinon_1.default.spy(patient, 'implementSave');
        patient.savePatient(req, res);
        spy.calledOnce.should.be.true;
    });
});
//# sourceMappingURL=patientRegistration.spec.js.map