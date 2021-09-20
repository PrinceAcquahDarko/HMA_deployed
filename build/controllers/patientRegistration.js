"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRegistration = void 0;
var Patient = require('../model/patientmodel');
var PatientRegistration = /** @class */ (function () {
    function PatientRegistration() {
        this.savePatient = this.savePatient.bind(this);
    }
    PatientRegistration.prototype.savePatient = function (req, res) {
        var lastthree = req.body.lastname.slice(-3);
        var lastthreeofNum = req.body.contact.toString().slice(-3);
        var key = lastthree + lastthreeofNum;
        req.body.key = key;
        this.implementSave(req, res);
    };
    PatientRegistration.prototype.implementSave = function (req, res) {
        var patient = new Patient(req.body);
        patient.save(function (err, data) {
            if (err)
                return res.status(400).send({ message: "Ops sorry please try again" });
            return res.status(200).send({ key: data.key, message: 'Patient registered successfully' });
        });
    };
    PatientRegistration.prototype.getAllPatients = function (req, res) {
        Patient.find(function (err, users) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).send({ message: "user found", users: users });
        });
    };
    PatientRegistration.prototype.getPatientById = function (req, res) {
        Patient.find({ key: req.query.key }, function (err, user) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).send({ message: "user found", user: user });
        });
    };
    PatientRegistration.prototype.deleteUser = function (req, res) {
        Patient.findByIdAndDelete({ _id: req.query.id }, function (err) {
            if (err)
                return res.status(400).json({ "message": "Ops sorry please try again" });
            return res.status(200).json({ "done": "successfully deleted" });
        });
    };
    return PatientRegistration;
}());
exports.PatientRegistration = PatientRegistration;
//# sourceMappingURL=patientRegistration.js.map